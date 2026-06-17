import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BeveledDiceGeometry } from './dice-geometry.js';
import { createDiceShaderMaterial } from './dice-shaders.js';
import { ThrowTrail, Shockwave } from './effects.js';

// ===== Dice variety — matches game's 7 types =====
const DICE_STYLES = [
    { body: 0x12121e, dot: 0xffd700, emissive: 0xff8c00, name: 'golden', shader: 'golden' },
    { body: 0x1a0a20, dot: 0xff4444, emissive: 0xff2200, name: 'fire', shader: 'fire' },
    { body: 0x0a1a2e, dot: 0x44aaff, emissive: 0x2288ff, name: 'ice', shader: 'ice' },
    { body: 0x0a1e12, dot: 0x44ff88, emissive: 0x22cc66, name: 'nature', shader: null },
    { body: 0x1a0a2e, dot: 0xcc66ff, emissive: 0xaa44ff, name: 'arcane', shader: 'arcane' },
    { body: 0x1e1a0a, dot: 0xffaa33, emissive: 0xff7700, name: 'amber', shader: null },
    { body: 0x1e1e1e, dot: 0xffffff, emissive: 0xcccccc, name: 'star', shader: 'star' },
];

export function initScene(canvas, state) {
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
    });
    renderer.setSize(state.width, state.height);
    renderer.setPixelRatio(state.dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030306);
    scene.fog = new THREE.FogExp2(0x030306, 0.05);

    const camera = new THREE.PerspectiveCamera(40, state.width / state.height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const lights = setupLighting(scene);
    const envMap = createEnvMap();

    // ===== Main Dice Group (multiple dice) =====
    const diceGroup = new THREE.Group();
    scene.add(diceGroup);

    // Hero dice: 1 large center (beveled geometry + golden shader)
    const heroDice = createSingleDice(1.4, DICE_STYLES[0], envMap, true);
    heroDice.userData.role = 'hero';
    diceGroup.add(heroDice);

    // Orbiting dice (different styles, smaller)
    const orbiters = [];
    for (let i = 0; i < 4; i++) {
        const style = DICE_STYLES[i + 1];
        const orb = createSingleDice(0.55, style, envMap);
        orb.userData.role = 'orbiter';
        orb.userData.index = i;
        orb.userData.orbitAngle = (i / 4) * Math.PI * 2;
        orb.userData.orbitRadius = 2.2 + (i % 2) * 0.5;
        orb.userData.orbitSpeed = 0.2 + i * 0.05;
        orb.userData.yOffset = (i - 1.5) * 0.4;
        orb.visible = false; // shown in specific sections
        diceGroup.add(orb);
        orbiters.push(orb);
    }

    // Collection dice (7 types, shown only in Collection section)
    const collectionDice = [];
    for (let i = 0; i < 7; i++) {
        const style = DICE_STYLES[i];
        const cd = createSingleDice(0.35, style, envMap);
        cd.userData.role = 'collection';
        cd.userData.index = i;
        cd.visible = false;
        diceGroup.add(cd);
        collectionDice.push(cd);
    }

    diceGroup.userData.hero = heroDice;
    diceGroup.userData.orbiters = orbiters;
    diceGroup.userData.collection = collectionDice;

    // ===== Particles =====
    const particles = createParticles(scene);

    // ===== Glow orbs =====
    createGlowOrbs(scene);

    // ===== Effects: throw trail + landing shockwave =====
    const trail = new ThrowTrail(scene, 80);
    const shockwave = new Shockwave(scene);

    return { scene, camera, renderer, dice: diceGroup, particles, lights, trail, shockwave };
}

function setupLighting(scene) {
    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x6677ff, 0.6);
    fillLight.position.set(-4, 1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xff6b35, 1.5);
    rimLight.position.set(0, -3, -4);
    scene.add(rimLight);

    const topLight = new THREE.PointLight(0xffd700, 0.8, 10);
    topLight.position.set(0, 4, 2);
    scene.add(topLight);

    const ambient = new THREE.AmbientLight(0x151520, 0.4);
    scene.add(ambient);

    return { key: keyLight, fill: fillLight, rim: rimLight, top: topLight };
}

function createSingleDice(size, style, envMap, useBeveled = false) {
    // Use BeveledDiceGeometry for hero, RoundedBox for smaller dice
    const geometry = useBeveled
        ? new BeveledDiceGeometry(size)
        : new RoundedBoxGeometry(size, size, size, 4, size * 0.07);

    let material;
    // Use shader material if available
    if (style.shader) {
        material = createDiceShaderMaterial(style.shader);
    }

    if (!material) {
        material = new THREE.MeshStandardMaterial({
            color: style.body,
            metalness: 0.8,
            roughness: 0.2,
            envMap,
            envMapIntensity: 1.8,
        });
    }

    const dice = new THREE.Mesh(geometry, material);

    // Only add physical dots for non-shader dice (shader dice have visual effects instead)
    if (!style.shader) {
        addDiceDots(dice, size, style);
    }

    // Edge glow shell
    const glowGeom = new RoundedBoxGeometry(size * 1.05, size * 1.05, size * 1.05, 3, size * 0.08);
    const glowMat = new THREE.MeshBasicMaterial({
        color: style.emissive,
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
    });
    dice.add(new THREE.Mesh(glowGeom, glowMat));

    // Inner point light
    const innerLight = new THREE.PointLight(style.emissive, 0.25, size * 3);
    dice.add(innerLight);

    dice.userData.style = style;
    dice.userData.shaderMat = style.shader ? material : null;
    return dice;
}

function addDiceDots(dice, size, style) {
    const dotRadius = size * 0.048;
    const dotGeom = new THREE.SphereGeometry(dotRadius, 12, 12);
    const dotMat = new THREE.MeshStandardMaterial({
        color: style.dot,
        emissive: style.emissive,
        emissiveIntensity: 1.5,
        metalness: 0.9,
        roughness: 0.05,
    });

    const offset = size * 0.18;
    const surface = size * 0.51;

    const faces = [
        { dir: [0, 0, 1], dots: [[0, 0]] },
        { dir: [0, 0, -1], dots: [[-offset, offset], [offset, -offset]] },
        { dir: [1, 0, 0], dots: [[-offset, offset], [0, 0], [offset, -offset]] },
        { dir: [-1, 0, 0], dots: [[-offset, -offset], [offset, -offset], [-offset, offset], [offset, offset]] },
        { dir: [0, 1, 0], dots: [[-offset, -offset], [offset, -offset], [0, 0], [-offset, offset], [offset, offset]] },
        { dir: [0, -1, 0], dots: [[-offset, -offset], [offset, -offset], [-offset, 0], [offset, 0], [-offset, offset], [offset, offset]] },
    ];

    faces.forEach(face => {
        const [nx, ny, nz] = face.dir;
        face.dots.forEach(([dx, dy]) => {
            const dot = new THREE.Mesh(dotGeom, dotMat);
            if (nz !== 0) dot.position.set(dx, dy, nz * surface);
            else if (nx !== 0) dot.position.set(nx * surface, dy, dx);
            else dot.position.set(dx, ny * surface, dy);
            dice.add(dot);
        });
    });
}

function createEnvMap() {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(size / 2, size / 3, 0, size / 2, size / 2, size);
    gradient.addColorStop(0, '#2a1040');
    gradient.addColorStop(0.3, '#16213e');
    gradient.addColorStop(0.6, '#0a1628');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const g2 = ctx.createRadialGradient(size * 0.75, size * 0.2, 0, size * 0.75, size * 0.2, size * 0.3);
    g2.addColorStop(0, 'rgba(255, 107, 53, 0.4)');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, size, size);

    const g3 = ctx.createRadialGradient(size * 0.15, size * 0.7, 0, size * 0.15, size * 0.7, size * 0.25);
    g3.addColorStop(0, 'rgba(80, 80, 255, 0.3)');
    g3.addColorStop(1, 'transparent');
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
}

function createParticles(scene) {
    const dustCount = 250;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 14;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    const dustGeom = new THREE.BufferGeometry();
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.012,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
    });
    const dust = new THREE.Points(dustGeom, dustMat);
    scene.add(dust);

    const accentCount = 60;
    const accentPositions = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount; i++) {
        accentPositions[i * 3] = (Math.random() - 0.5) * 16;
        accentPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        accentPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 3;
    }
    const accentGeom = new THREE.BufferGeometry();
    accentGeom.setAttribute('position', new THREE.BufferAttribute(accentPositions, 3));
    const accentMat = new THREE.PointsMaterial({
        color: 0xff6b35,
        size: 0.035,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
    });
    const accent = new THREE.Points(accentGeom, accentMat);
    scene.add(accent);

    dust.userData.accent = accent;
    return dust;
}

function createGlowOrbs(scene) {
    const orbGeom = new THREE.SphereGeometry(0.5, 12, 12);
    const orbs = [
        { pos: [-5, 2, -7], color: 0xff6b35, opacity: 0.035, scale: 2.5 },
        { pos: [5, -1, -9], color: 0x4444ff, opacity: 0.025, scale: 3.5 },
        { pos: [-2, -3, -6], color: 0xffd700, opacity: 0.02, scale: 2 },
        { pos: [3, 3, -8], color: 0xff3366, opacity: 0.025, scale: 3 },
    ];
    orbs.forEach(({ pos, color, opacity, scale }) => {
        const mat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity, blending: THREE.AdditiveBlending,
        });
        const orb = new THREE.Mesh(orbGeom, mat);
        orb.position.set(...pos);
        orb.scale.setScalar(scale);
        scene.add(orb);
    });
}
