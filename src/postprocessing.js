import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// Custom composite shader (inspired by Active Theory's HomeComposite)
const CompositeShader = {
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uRGBShift: { value: 0.003 },
        uVignette: { value: 0.4 },
        uContrast: { value: 1.05 },
        uBrightness: { value: 0.0 },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uRGBShift;
        uniform float uVignette;
        uniform float uContrast;
        uniform float uBrightness;
        varying vec2 vUv;

        vec3 adjustContrast(vec3 color, float contrast) {
            return (color - 0.5) * contrast + 0.5;
        }

        void main() {
            vec2 uv = vUv;
            vec2 center = uv - 0.5;
            float dist = length(center);

            // Chromatic aberration (stronger at edges)
            float shift = uRGBShift * dist;
            vec2 dir = normalize(center);

            float r = texture2D(tDiffuse, uv + dir * shift).r;
            float g = texture2D(tDiffuse, uv).g;
            float b = texture2D(tDiffuse, uv - dir * shift).b;
            vec3 color = vec3(r, g, b);

            // Contrast adjustment
            color = adjustContrast(color, uContrast);

            // Brightness
            color += uBrightness;

            // Vignette
            float vignette = 1.0 - dist * dist * uVignette;
            color *= vignette;

            // Subtle film grain
            float grain = (fract(sin(dot(uv * uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.015;
            color += grain;

            gl_FragColor = vec4(color, 1.0);
        }
    `,
};

export function initPostProcessing(renderer, scene, camera, state) {
    const composer = new EffectComposer(renderer);

    // Main render
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Bloom (Unreal-style, like Active Theory)
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(state.width, state.height),
        0.8,    // strength
        0.4,    // radius
        0.85    // threshold
    );
    composer.addPass(bloomPass);

    // Custom composite (chromatic aberration + vignette + contrast)
    const compositePass = new ShaderPass(CompositeShader);
    composer.addPass(compositePass);

    // Update uniforms each frame
    const originalRender = composer.render.bind(composer);
    composer.render = function(dt) {
        compositePass.uniforms.uTime.value = state.time;
        // Increase chromatic aberration slightly when scrolling fast
        const scrollSpeed = Math.abs(state.scrollTarget - state.scroll);
        compositePass.uniforms.uRGBShift.value = 0.002 + scrollSpeed * 0.02;
        originalRender(dt);
    };

    return composer;
}
