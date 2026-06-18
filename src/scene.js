import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BeveledDiceGeometry } from './dice-geometry.js';
import { createDiceFaceMaterials } from './dice-faces.js';
import { ThrowTrail, Shockwave } from './effects.js';

// ===== Dice variety — numbers display mode (matches game) =====
const DICE_STYLES = [
    { body: '#f4f4ee', num: 'normal',  emissive: 0xffe0a0, name: 'classic' },  // 经典白底黑字
    { body: '#fff8e8', num: 'golden',  emissive: 0xffcc44, name: 'golden' },   // 暖白金字
    { body: '#1a1018', num: 'fire',    emissive: 0xff5522, name: 'fire' },     // 暗体红字
    { body: '#eef6ff', num: 'ice',     emissive: 0x66bbff, name: 'ice' },      // 冰白蓝字
    { body: '#f0eafc', num: 'arcane',  emissive: 0xaa66ff, name: 'arcane' },   // 淡紫奥术
    { body: '#fef0e0', num: 'crystal', emissive: 0x66ddff, name: 'crystal' },  // 水晶蓝字
    { body: '#1a1a1e', num: 'golden',  emissive: 0xffd700, name: 'obsidian' }, // 黑曜金字
];

export function initScene(canvas, state) {
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,  // transparent — CSS gradient shows through
        powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0); // fully transparent clear
    renderer.setSize(state.width, state.height);
    renderer.setPixelRatio(state.dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    // No background — transparent canvas lets CSS gradient show through
    scene.background = null;
    // Very subtle fog for depth (uses neutral color that blends with CSS bg)
    scene.fog = new THREE.FogExp2(0xf0f0f4, 0.025);

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
    // Key light — bright warm from top-right (main illumination)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    // Fill light — soft blue from left
    const fillLight = new THREE.DirectionalLight(0xaabbff, 0.8);
    fillLight.position.set(-4, 1, 3);
    scene.add(fillLight);

    // Rim/accent light (animated per section)
    const rimLight = new THREE.DirectionalLight(0xff6b35, 0.6);
    rimLight.position.set(0, -2, -4);
    scene.add(rimLight);

    // Top accent
    const topLight = new THREE.PointLight(0xffd700, 0.4, 10);
    topLight.position.set(0, 4, 2);
    scene.add(topLight);

    // Ambient — brighter for light theme
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    return { key: keyLight, fill: fillLight, rim: rimLight, top: topLight };
}

function createSingleDice(size, style, envMap, useBeveled = false) {
    // Use BeveledDiceGeometry for hero, RoundedBox for smaller dice
    // Both have 6 material groups (one per face) for the face-texture material array
    const geometry = useBeveled
        ? new BeveledDiceGeometry(size)
        : new RoundedBoxGeometry(size, size, size, 4, size * 0.07);

    // Numbers display mode: large centered number on each face (matches game)
    const materials = createDiceFaceMaterials(style.body, style.num);

    const dice = new THREE.Mesh(geometry, materials);

    // Subtle edge glow shell (very faint, matches dot color)
    const glowGeom = new RoundedBoxGeometry(size * 1.06, size * 1.06, size * 1.06, 3, size * 0.08);
    const glowMat = new THREE.MeshBasicMaterial({
        color: style.emissive,
        transparent: true,
        opacity: 0.04,
        side: THREE.BackSide,
    });
    dice.add(new THREE.Mesh(glowGeom, glowMat));

    // Inner point light
    const innerLight = new THREE.PointLight(style.emissive, 0.2, size * 3);
    dice.add(innerLight);

    dice.userData.style = style;
    dice.userData.shaderMat = null;
    return dice;
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
        color: 0x888899,
        size: 0.015,
        transparent: true,
        opacity: 0.2,
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
        size: 0.03,
        transparent: true,
        opacity: 0.3,
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
        { pos: [-5, 2, -7], color: 0xff6b35, opacity: 0.03, scale: 2.5 },
        { pos: [5, -1, -9], color: 0x6666ff, opacity: 0.02, scale: 3.5 },
        { pos: [-2, -3, -6], color: 0xffaa00, opacity: 0.02, scale: 2 },
        { pos: [3, 3, -8], color: 0xff3366, opacity: 0.02, scale: 3 },
    ];
    orbs.forEach(({ pos, color, opacity, scale }) => {
        const mat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
        });
        const orb = new THREE.Mesh(orbGeom, mat);
        orb.position.set(...pos);
        orb.scale.setScalar(scale);
        scene.add(orb);
    });
}
