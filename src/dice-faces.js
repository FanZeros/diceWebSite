import * as THREE from 'three';

// ===== Dice face textures — ported from game's DiceFaceTexture.ts =====
// Classic white face + black pips with gradient/highlight/shadow + black border

// Dot positions per face value (normalized 0-1) — matches game
const DOT_POSITIONS = {
    1: [[0.5, 0.5]],
    2: [[0.78, 0.22], [0.22, 0.78]],
    3: [[0.78, 0.22], [0.5, 0.5], [0.22, 0.78]],
    4: [[0.22, 0.22], [0.78, 0.22], [0.22, 0.78], [0.78, 0.78]],
    5: [[0.22, 0.22], [0.78, 0.22], [0.5, 0.5], [0.22, 0.78], [0.78, 0.78]],
    6: [[0.22, 0.22], [0.78, 0.22], [0.22, 0.5], [0.78, 0.5], [0.22, 0.78], [0.78, 0.78]],
};

// BoxGeometry material order: +X, -X, +Y, -Y, +Z, -Z
// Standard die: opposite faces sum to 7
const FACE_VALUE_ORDER = [3, 4, 1, 6, 2, 5];

const TEX_SIZE = 512;

// Dot color presets (matches game's dot types)
export const DOT_PRESETS = {
    normal: { core: '#4a4a4a', edge: '#111111', highlight: 'rgba(255,255,255,0.25)' },
    golden: { core: '#fff4b8', edge: '#d4960a', highlight: 'rgba(255,255,255,0.55)' },
    fire:   { core: '#ff8c42', edge: '#c0250a', highlight: 'rgba(255,230,180,0.5)' },
    ice:    { core: '#bae6fd', edge: '#0284c7', highlight: 'rgba(255,255,255,0.5)' },
    crystal:{ core: '#e0f2fe', edge: '#38bdf8', highlight: 'rgba(255,255,255,0.5)' },
    arcane: { core: '#e9d5ff', edge: '#9333ea', highlight: 'rgba(255,255,255,0.5)' },
};

function renderEdgeBorder(ctx, s) {
    const b = s * 0.06;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, s, b);
    ctx.fillRect(0, s - b, s, b);
    ctx.fillRect(0, 0, b, s);
    ctx.fillRect(s - b, 0, b, s);
}

function renderDot(ctx, x, y, radius, preset) {
    ctx.save();
    // Drop shadow
    ctx.shadowColor = 'rgba(0,0,0,0.28)';
    ctx.shadowBlur = Math.max(3, radius * 0.25);
    ctx.shadowOffsetX = radius * 0.06;
    ctx.shadowOffsetY = radius * 0.08;

    // Radial gradient body
    const g = ctx.createRadialGradient(x - radius * 0.25, y - radius * 0.25, 0, x, y, radius);
    g.addColorStop(0, preset.core);
    g.addColorStop(1, preset.edge);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Inner highlight
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = preset.highlight;
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y - radius * 0.2, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function createFaceTexture(faceValue, bodyColor, preset) {
    const s = TEX_SIZE;
    const canvas = document.createElement('canvas');
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext('2d');

    // Face background — slightly gradient for premium feel
    const bg = ctx.createRadialGradient(s / 2, s * 0.4, 0, s / 2, s / 2, s * 0.75);
    bg.addColorStop(0, lighten(bodyColor, 18));
    bg.addColorStop(1, bodyColor);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, s, s);

    // Dots
    const positions = DOT_POSITIONS[faceValue] || [];
    const padding = s * 0.15;
    const drawArea = s - padding * 2;
    const dotRadius = s * (positions.length >= 6 ? 0.090 : 0.125);

    for (const [nx, ny] of positions) {
        const x = padding + nx * drawArea;
        const y = padding + ny * drawArea;
        renderDot(ctx, x, y, dotRadius, preset);
    }

    // Edge border
    renderEdgeBorder(ctx, s);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 16;
    return tex;
}

// Lighten a hex color by a percentage
function lighten(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const r = Math.min(255, (num >> 16) + Math.round(255 * percent / 100));
    const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * percent / 100));
    const b = Math.min(255, (num & 0xff) + Math.round(255 * percent / 100));
    return `rgb(${r},${g},${b})`;
}

/**
 * Get 6 face material array for a dice.
 * bodyColor: hex string for face background (e.g. '#f5f5f0' for classic white)
 * dotPreset: key into DOT_PRESETS
 */
export function createDiceFaceMaterials(bodyColor = '#f4f4ee', dotPreset = 'normal') {
    const preset = DOT_PRESETS[dotPreset] || DOT_PRESETS.normal;
    return FACE_VALUE_ORDER.map(fv => {
        const tex = createFaceTexture(fv, bodyColor, preset);
        return new THREE.MeshStandardMaterial({
            map: tex,
            metalness: 0.15,
            roughness: 0.45,
        });
    });
}
