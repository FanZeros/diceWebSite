import * as THREE from 'three';

// ===== Dice face textures — exact port from game's DiceFaceTexture.ts =====
// Rendering: face background + number (centered, bold, black stroke) + black edge border
// Material: non-metallic, low roughness (plastic/ceramic feel, not PBR metallic)

const FACE_VALUE_ORDER = [3, 4, 1, 6, 2, 5]; // BoxGeometry material slots → face values
const TEX_SIZE = 512;

// ===== Exact game render functions =====

function renderEdgeBorder(ctx, s) {
    const b = s * 0.06;  // 6% border width (matches game)
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, s, b);
    ctx.fillRect(0, s - b, s, b);
    ctx.fillRect(0, 0, b, s);
    ctx.fillRect(s - b, 0, b, s);
}

function renderFaceBg(ctx, s, bodyColor) {
    // Game uses flat white fill for 'normal' faceType
    ctx.fillStyle = bodyColor;
    ctx.fillRect(0, 0, s, s);
}

function renderNumberCenteredStroke(ctx, faceValue, s, numColor, strokeColor) {
    // Exact port from game: renderNumberCenteredStroke
    const fontSize = Math.floor(s * 0.62);  // game uses 0.62 for normal+center
    const cx = s / 2;
    const cy = s / 2 + fontSize * 0.04;  // slight baseline correction

    ctx.save();
    ctx.font = `bold ${fontSize}px GameFont, "Helvetica Neue", Helvetica, Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';  // game uses round join for smooth stroke corners

    const numStr = String(faceValue);

    // Black stroke (game: lineWidth = max(floor(fontSize * 0.07), 4))
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(Math.floor(fontSize * 0.07), 4);
    ctx.strokeText(numStr, cx, cy);

    // Number fill
    ctx.fillStyle = numColor;
    ctx.fillText(numStr, cx, cy);

    ctx.restore();
}

function createFaceTexture(faceValue, bodyColor, numColor, strokeColor) {
    const s = TEX_SIZE;
    const canvas = document.createElement('canvas');
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext('2d');

    // Layer 1: Face background (game: renderFaceBg)
    renderFaceBg(ctx, s, bodyColor);

    // Layer 2: Number centered with stroke (game: renderNumberCenteredStroke)
    renderNumberCenteredStroke(ctx, faceValue, s, numColor, strokeColor);

    // Layer 3: Edge border (game: renderEdgeBorder)
    renderEdgeBorder(ctx, s);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;  // game: crisp text, no mipmap blur
    tex.generateMipmaps = false;
    tex.anisotropy = 16;
    return tex;
}

// ===== Dice style presets (matching game's face+dot type combos) =====
export const DICE_PRESETS = {
    normal:  { body: '#ffffff', num: '#1a1a1a', stroke: '#000000' },
    golden:  { body: '#ffffff', num: '#b8860b', stroke: '#000000' },
    fire:    { body: '#1a0a0a', num: '#ff4444', stroke: '#000000' },
    ice:     { body: '#f0f9ff', num: '#0369a1', stroke: '#0a1628' },
    arcane:  { body: '#faf5ff', num: '#7c3aed', stroke: '#1a0a3a' },
    shadow:  { body: '#1a0a2e', num: '#ffffff', stroke: '#1a0a3a' },
    wild:    { body: '#ffffff', num: '#1a1a1a', stroke: '#000000' },
};

/**
 * Create 6 face materials for a dice — exact game rendering method.
 * Uses non-metallic material (plastic/ceramic look, not PBR metallic).
 */
export function createDiceFaceMaterials(preset = 'normal') {
    const p = DICE_PRESETS[preset] || DICE_PRESETS.normal;
    return FACE_VALUE_ORDER.map(fv => {
        const tex = createFaceTexture(fv, p.body, p.num, p.stroke);
        return new THREE.MeshStandardMaterial({
            map: tex,
            metalness: 0.0,     // game uses flat shader, no metallic
            roughness: 0.35,    // slight gloss like plastic dice
        });
    });
}
