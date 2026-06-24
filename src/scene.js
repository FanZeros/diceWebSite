import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BeveledDiceGeometry } from './dice-geometry.js';
import { createDiceFaceMaterials } from './dice-faces.js';
import { ThrowTrail, Shockwave } from './effects.js';

// ===== Dice presets — matching game's face/dot type combos =====
const DICE_STYLES = [
    { preset: 'normal',  emissive: 0x999999, name: 'normal' },
    { preset: 'golden',  emissive: 0xffcc44, name: 'golden' },
    { preset: 'fire',    emissive: 0xff3311, name: 'fire' },
    { preset: 'ice',     emissive: 0x44aaff, name: 'ice' },
    { preset: 'arcane',  emissive: 0x9955ff, name: 'arcane' },
    { preset: 'shadow',  emissive: 0x8833cc, name: 'shadow' },
    { preset: 'wild',    emissive: 0xff6b35, name: 'wild' },
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
    // Dark flowing gradient background
    scene.background = createGradientBackground();
    scene.fog = new THREE.FogExp2(0x0a0a18, 0.02);

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
    // Key light — warm from top-right
    const keyLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    // Fill light — cool blue from left
    const fillLight = new THREE.DirectionalLight(0x6688ff, 0.6);
    fillLight.position.set(-4, 1, 3);
    scene.add(fillLight);

    // Rim/accent light (animated per section)
    const rimLight = new THREE.DirectionalLight(0xff6b35, 0.8);
    rimLight.position.set(0, -2, -4);
    scene.add(rimLight);

    // Top accent
    const topLight = new THREE.PointLight(0xffd700, 0.5, 10);
    topLight.position.set(0, 4, 2);
    scene.add(topLight);

    // Ambient — dim for dark theme (deep atmosphere)
    const ambient = new THREE.AmbientLight(0x222244, 0.8);
    scene.add(ambient);

    return { key: keyLight, fill: fillLight, rim: rimLight, top: topLight };
}

function createSingleDice(size, style, envMap, useBeveled = false) {
    // Use BeveledDiceGeometry for hero, RoundedBox for smaller dice
    const geometry = useBeveled
        ? new BeveledDiceGeometry(size)
        : new RoundedBoxGeometry(size, size, size, 4, size * 0.07);

    // Game-accurate face materials (canvas texture, non-metallic plastic)
    const materials = createDiceFaceMaterials(style.preset);

    const dice = new THREE.Mesh(geometry, materials);

    // Subtle drop shadow (flat dark disk below dice for grounding)
    // skipped — background is transparent, shadow not meaningful

    // Very subtle edge glow
    const glowGeom = new RoundedBoxGeometry(size * 1.04, size * 1.04, size * 1.04, 3, size * 0.08);
    const glowMat = new THREE.MeshBasicMaterial({
        color: style.emissive,
        transparent: true,
        opacity: 0.03,
        side: THREE.BackSide,
    });
    dice.add(new THREE.Mesh(glowGeom, glowMat));

    dice.userData.style = style;
    return dice;
}

function createGradientBackground() {
    // Dark nebula-like gradient with flowing color orbs
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Base: deep dark blue-black gradient
    const base = ctx.createLinearGradient(0, 0, 0, size);
    base.addColorStop(0, '#08081a');
    base.addColorStop(0.3, '#0c0c22');
    base.addColorStop(0.6, '#0a0a1c');
    base.addColorStop(1, '#060612');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);

    // Warm nebula: top-right (orange/amber glow) — brighter
    const orb1 = ctx.createRadialGradient(size * 0.75, size * 0.2, 0, size * 0.75, size * 0.2, size * 0.45);
    orb1.addColorStop(0, 'rgba(255, 120, 50, 0.18)');
    orb1.addColorStop(0.5, 'rgba(200, 60, 20, 0.09)');
    orb1.addColorStop(1, 'transparent');
    ctx.fillStyle = orb1;
    ctx.fillRect(0, 0, size, size);

    // Cool nebula: center-left (blue/indigo) — brighter
    const orb2 = ctx.createRadialGradient(size * 0.15, size * 0.55, 0, size * 0.15, size * 0.55, size * 0.4);
    orb2.addColorStop(0, 'rgba(80, 80, 240, 0.15)');
    orb2.addColorStop(0.5, 'rgba(40, 30, 150, 0.07)');
    orb2.addColorStop(1, 'transparent');
    ctx.fillStyle = orb2;
    ctx.fillRect(0, 0, size, size);

    // Purple nebula: bottom-center — brighter
    const orb3 = ctx.createRadialGradient(size * 0.5, size * 0.85, 0, size * 0.5, size * 0.85, size * 0.35);
    orb3.addColorStop(0, 'rgba(150, 50, 220, 0.12)');
    orb3.addColorStop(0.6, 'rgba(100, 30, 160, 0.06)');
    orb3.addColorStop(1, 'transparent');
    ctx.fillStyle = orb3;
    ctx.fillRect(0, 0, size, size);

    // Teal accent: top-left — brighter
    const orb4 = ctx.createRadialGradient(size * 0.1, size * 0.15, 0, size * 0.1, size * 0.15, size * 0.3);
    orb4.addColorStop(0, 'rgba(50, 200, 200, 0.1)');
    orb4.addColorStop(1, 'transparent');
    ctx.fillStyle = orb4;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
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
    // Layer 1: Dense star field (small bright dots)
    const starCount = 600;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 18;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
        starSizes[i] = 0.015 + Math.random() * 0.025; // varied sizes
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
    const starMat = new THREE.PointsMaterial({
        color: 0xddeeff,
        size: 0.03,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeom, starMat);
    scene.add(stars);

    // Layer 2: Bright accent stars (warm colored, larger)
    const accentCount = 120;
    const accentPositions = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount; i++) {
        accentPositions[i * 3] = (Math.random() - 0.5) * 20;
        accentPositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        accentPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    const accentGeom = new THREE.BufferGeometry();
    accentGeom.setAttribute('position', new THREE.BufferAttribute(accentPositions, 3));
    const accentMat = new THREE.PointsMaterial({
        color: 0xff6b35,
        size: 0.055,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
    });
    const accent = new THREE.Points(accentGeom, accentMat);
    scene.add(accent);

    // Layer 3: Sparse bright "star burst" particles (very bright, few)
    const burstCount = 30;
    const burstPositions = new Float32Array(burstCount * 3);
    for (let i = 0; i < burstCount; i++) {
        burstPositions[i * 3] = (Math.random() - 0.5) * 16;
        burstPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        burstPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    const burstGeom = new THREE.BufferGeometry();
    burstGeom.setAttribute('position', new THREE.BufferAttribute(burstPositions, 3));
    const burstMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.07,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
    });
    const burst = new THREE.Points(burstGeom, burstMat);
    scene.add(burst);

    stars.userData.accent = accent;
    stars.userData.burst = burst;
    return stars;
}

function createGlowOrbs(scene) {
    const orbGeom = new THREE.SphereGeometry(0.5, 16, 16);
    const orbs = [
        { pos: [-5, 2, -7], color: 0xff6b35, opacity: 0.06, scale: 3 },
        { pos: [5, -1, -9], color: 0x4444ff, opacity: 0.05, scale: 4 },
        { pos: [-2, -3, -6], color: 0xff8800, opacity: 0.04, scale: 2.5 },
        { pos: [3, 3, -8], color: 0x8833cc, opacity: 0.04, scale: 3.5 },
        { pos: [0, -4, -10], color: 0x2266aa, opacity: 0.03, scale: 5 },
    ];
    orbs.forEach(({ pos, color, opacity, scale }) => {
        const mat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
        });
        const orb = new THREE.Mesh(orbGeom, mat);
        orb.position.set(...pos);
        orb.scale.setScalar(scale);
        orb.userData.baseOpacity = opacity;
        scene.add(orb);
    });
}
