import * as THREE from 'three';

// Shared vertex shader
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Shared noise lib
const noiseLib = `
float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}
float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
    );
}
float fbm(vec2 p) {
    float v = 0.0; float a = 0.52;
    mat2 rot = mat2(0.8660, 0.5000, -0.5000, 0.8660);
    for (int i = 0; i < 3; i++) {
        v += a * smoothNoise(p);
        p = rot * p * 2.1 + vec2(1.7, 9.2);
        a *= 0.5;
    }
    return v;
}
float fbm2(vec2 p) {
    return smoothNoise(p) * 0.6 + smoothNoise(p * 2.1 + vec2(1.7, 9.2)) * 0.4;
}
`;

// ===== Fire Shader =====
const fireFragment = `
precision mediump float;
uniform float uTime;
uniform vec3 uBaseColor;
varying vec2 vUv;
${noiseLib}

vec3 fireColor(float t) {
    vec3 col = vec3(0.48, 0.01, 0.0);
    col = mix(col, vec3(0.88, 0.18, 0.0), clamp(t * 2.0, 0.0, 1.0));
    col = mix(col, vec3(1.0, 0.52, 0.0), clamp(t * 2.5 - 0.8, 0.0, 1.0));
    col = mix(col, vec3(1.0, 0.80, 0.12), clamp(t * 3.0 - 1.7, 0.0, 1.0));
    col = mix(col, vec3(1.0, 0.96, 0.58), clamp(t * 4.0 - 3.0, 0.0, 1.0));
    return col;
}

void main() {
    vec2 uv = vUv;
    vec2 fc = vec2(uv.x * 2.6, (1.0 - uv.y) * 2.6);
    vec2 fc2 = fc * 1.65 + vec2(4.1, -1.3);
    float h1 = fbm(fc + vec2(0.3, -uTime * 1.15));
    float h2 = fbm(fc2 + vec2(-0.5, -uTime * 2.25));
    float heat = h1 * 0.68 + h2 * 0.32;

    float heightFactor = 1.5 - uv.y * 1.2;
    heat *= heightFactor;

    float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
    heat *= smoothstep(0.0, 0.08, border);

    float flicker = 1.0 + 0.10 * sin(uTime * 19.3) + 0.06 * sin(uTime * 34.1 + 2.3);
    heat = clamp(heat * flicker, 0.0, 1.0);

    vec3 col = mix(uBaseColor, fireColor(heat), heat * 0.9);
    gl_FragColor = vec4(col, 1.0);
}
`;

// ===== Star Shader =====
const starFragment = `
precision mediump float;
uniform float uTime;
uniform vec3 uBaseColor;
varying vec2 vUv;
${noiseLib}

float starBurst(vec2 uv, vec2 center, float phase) {
    vec2 d = uv - center;
    float dist = length(d);
    float pulse = 0.5 + 0.5 * sin(uTime * 3.5 + phase);
    pulse *= pulse;
    float core = exp(-dist * dist * 280.0);
    float halo = exp(-dist * dist * 80.0) * 0.3;
    return (core + halo) * pulse;
}

void main() {
    vec2 uv = vUv;
    float shimmer = fbm2(uv * 3.5 + vec2(uTime * 0.25, uTime * 0.18));
    float breath = 0.7 + 0.3 * sin(uTime * 1.8);
    float goldIntensity = shimmer * 0.4 * breath;
    vec3 goldColor = vec3(1.0, 0.85, 0.25);
    vec3 goldGlow = goldColor * goldIntensity;

    float sparkle = 0.0;
    for (int i = 0; i < 8; i++) {
        float fi = float(i);
        vec2 starPos = vec2(
            0.15 + 0.7 * fract(sin(fi * 127.1) * 43758.5),
            0.15 + 0.7 * fract(sin(fi * 311.7) * 43758.5)
        );
        float phase = fi * 2.39996;
        sparkle += starBurst(uv, starPos, phase);
    }
    sparkle = clamp(sparkle, 0.0, 1.5);
    vec3 sparkleColor = mix(goldColor, vec3(1.0, 0.98, 0.85), clamp(sparkle * 1.5, 0.0, 1.0));

    vec3 overlay = goldGlow + sparkleColor * sparkle * 0.6;
    vec3 col = 1.0 - (1.0 - uBaseColor) * (1.0 - overlay);
    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// ===== Golden Shader =====
const goldenFragment = `
precision mediump float;
uniform float uTime;
uniform vec3 uBaseColor;
varying vec2 vUv;
${noiseLib}

void main() {
    vec2 uv = vUv;
    vec2 flowDir = vec2(0.6, 0.8);
    float wave = fbm2(uv * 4.0 + flowDir * uTime * 0.15);
    float breath = 0.6 + 0.4 * sin(uTime * 1.2 + dot(uv, flowDir) * 3.0);
    float intensity = wave * 0.25 * breath;

    float sparkle = 0.0;
    for (int i = 0; i < 3; i++) {
        float fi = float(i);
        vec2 sparkPos = vec2(
            0.2 + 0.6 * fract(sin(fi * 73.1) * 43758.5),
            0.2 + 0.6 * fract(sin(fi * 191.7) * 43758.5)
        );
        float dist = length(uv - sparkPos);
        float phase = fi * 2.094 + uTime * 2.5;
        float pulse = max(0.0, sin(phase)) * max(0.0, sin(phase));
        sparkle += exp(-dist * dist * 300.0) * pulse * 0.4;
    }

    vec3 warmGold = vec3(1.0, 0.85, 0.4);
    vec3 whiteGold = vec3(1.0, 0.95, 0.7);
    vec3 overlay = warmGold * intensity + whiteGold * sparkle;
    vec3 col = 1.0 - (1.0 - uBaseColor) * (1.0 - overlay);
    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// ===== Ice Shader =====
const iceFragment = `
precision mediump float;
uniform float uTime;
uniform vec3 uBaseColor;
varying vec2 vUv;
${noiseLib}

void main() {
    vec2 uv = vUv;
    float crystal = fbm(uv * 6.0 + vec2(uTime * 0.05, uTime * 0.08));
    float shimmer = smoothNoise(uv * 12.0 + uTime * 0.3) * 0.3;
    float breath = 0.8 + 0.2 * sin(uTime * 1.0);

    vec3 iceColor = vec3(0.4, 0.8, 1.0);
    vec3 frostColor = vec3(0.7, 0.95, 1.0);
    vec3 overlay = mix(iceColor, frostColor, crystal) * (crystal * 0.4 + shimmer) * breath;

    vec3 col = uBaseColor + overlay * 0.5;
    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// ===== Arcane (Purple Energy) Shader =====
const arcaneFragment = `
precision mediump float;
uniform float uTime;
uniform vec3 uBaseColor;
varying vec2 vUv;
${noiseLib}

void main() {
    vec2 uv = vUv;
    vec2 center = uv - 0.5;
    float dist = length(center);
    float angle = atan(center.y, center.x);

    float swirl = fbm(vec2(angle * 2.0 + uTime * 0.5, dist * 5.0 - uTime * 0.8));
    float pulse = 0.7 + 0.3 * sin(uTime * 2.0 + dist * 8.0);
    float energy = swirl * pulse * smoothstep(0.5, 0.1, dist);

    vec3 purpleCore = vec3(0.6, 0.2, 1.0);
    vec3 purpleEdge = vec3(0.9, 0.5, 1.0);
    vec3 overlay = mix(purpleCore, purpleEdge, energy) * energy * 0.6;

    vec3 col = uBaseColor + overlay;
    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// ===== Factory =====
export const SHADER_TYPES = {
    fire: { fragment: fireFragment, baseColor: [0.08, 0.02, 0.02] },
    star: { fragment: starFragment, baseColor: [0.1, 0.1, 0.12] },
    golden: { fragment: goldenFragment, baseColor: [0.08, 0.06, 0.02] },
    ice: { fragment: iceFragment, baseColor: [0.02, 0.05, 0.1] },
    arcane: { fragment: arcaneFragment, baseColor: [0.06, 0.02, 0.1] },
};

export function createDiceShaderMaterial(type) {
    const config = SHADER_TYPES[type];
    if (!config) return null;

    return new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 },
            uBaseColor: { value: new THREE.Color(...config.baseColor) },
        },
        vertexShader,
        fragmentShader: config.fragment,
        toneMapped: false,
    });
}
