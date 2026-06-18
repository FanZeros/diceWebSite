import * as THREE from 'three';

// ===== Dice face textures — numbers display mode (matching game) =====
// Each face shows a large centered number with black stroke + colored fill

// BoxGeometry material order: +X, -X, +Y, -Y, +Z, -Z
// Standard die: opposite faces sum to 7
const FACE_VALUE_ORDER = [3, 4, 1, 6, 2, 5];

const TEX_SIZE = 512;

// Number color presets
export const NUMBER_PRESETS = {
    normal:  { numColor: '#1a1a1a', stroke: '#000000' },
    golden:  { numColor: '#d4960a', stroke: '#1a1a1a' },
    fire:    { numColor: '#ef4444', stroke: '#1a1a1a' },
    ice:     { numColor: '#0284c7', stroke: '#0a1628' },
    crystal: { numColor: '#38bdf8', stroke: '#0a1628' },
    arcane:  { numColor: '#9333ea', stroke: '#1a0a3a' },
};

function renderEdgeBorder(ctx, s) {
    const b = s * 0.06;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, s, b);
    ctx.fillRect(0, s - b, s, b);
    ctx.fillRect(0, 0, b, s);
    ctx.fillRect(s - b, 0, b, s);
}

function renderNumber(ctx, faceValue, s, preset) {
    const fontSize = Math.floor(s * 0.58);
    const cx = s / 2;
    const cy = s / 2 + fontSize * 0.04; // slight baseline correction

    ctx.save();
    ctx.font = `bold ${fontSize}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';

    const numStr = String(faceValue);

    // Black stroke (thick) for contrast
    ctx.strokeStyle = preset.stroke;
    ctx.lineWidth = Math.max(Math.floor(fontSize * 0.07), 4);
    ctx.strokeText(numStr, cx, cy);

    // Number fill
    ctx.fillStyle = preset.numColor;
    ctx.fillText(numStr, cx, cy);

    ctx.restore();
}

function createFaceTexture(faceValue, bodyColor, preset) {
    const s = TEX_SIZE;
    const canvas = document.createElement('canvas');
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext('2d');

    // Face background — subtle gradient for depth
    const bg = ctx.createRadialGradient(s / 2, s * 0.4, 0, s / 2, s / 2, s * 0.75);
    bg.addColorStop(0, lighten(bodyColor, 12));
    bg.addColorStop(1, bodyColor);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, s, s);

    // Large centered number (game's "numbers" display mode)
    renderNumber(ctx, faceValue, s, preset);

    // Edge border
    renderEdgeBorder(ctx, s);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 16;
    return tex;
}

function lighten(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const r = Math.min(255, (num >> 16) + Math.round(255 * percent / 100));
    const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * percent / 100));
    const b = Math.min(255, (num & 0xff) + Math.round(255 * percent / 100));
    return `rgb(${r},${g},${b})`;
}

/**
 * Get 6 face material array for a dice (numbers display mode).
 * bodyColor: hex string for face background (e.g. '#f4f4ee' for classic white)
 * numPreset: key into NUMBER_PRESETS
 */
export function createDiceFaceMaterials(bodyColor = '#f4f4ee', numPreset = 'normal') {
    const preset = NUMBER_PRESETS[numPreset] || NUMBER_PRESETS.normal;
    return FACE_VALUE_ORDER.map(fv => {
        const tex = createFaceTexture(fv, bodyColor, preset);
        return new THREE.MeshStandardMaterial({
            map: tex,
            metalness: 0.15,
            roughness: 0.45,
        });
    });
}
