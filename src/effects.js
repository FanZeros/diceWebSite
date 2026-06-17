import * as THREE from 'three';

// ===== Throw Trail — particle trail that follows the dice during flight =====
export class ThrowTrail {
    constructor(scene, maxParticles = 80) {
        this.maxParticles = maxParticles;
        this.particles = [];
        this.head = 0;

        const positions = new Float32Array(maxParticles * 3);
        const alphas = new Float32Array(maxParticles);
        const sizes = new Float32Array(maxParticles);

        // Init off-screen
        for (let i = 0; i < maxParticles; i++) {
            positions[i * 3] = 0;
            positions[i * 3 + 1] = -1000;
            positions[i * 3 + 2] = 0;
            alphas[i] = 0;
            sizes[i] = 0;
            this.particles.push({ life: 0, x: 0, y: 0, z: 0 });
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
        geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uColor: { value: new THREE.Color(0xff8c3a) },
            },
            vertexShader: `
                attribute float aAlpha;
                attribute float aSize;
                varying float vAlpha;
                void main() {
                    vAlpha = aAlpha;
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = aSize * (300.0 / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;
                void main() {
                    vec2 c = gl_PointCoord - 0.5;
                    float d = length(c);
                    float glow = smoothstep(0.5, 0.0, d);
                    gl_FragColor = vec4(uColor, glow * vAlpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        this.points = new THREE.Points(geometry, material);
        this.points.frustumCulled = false;
        scene.add(this.points);
        this.geometry = geometry;
    }

    // Emit a particle at given position
    emit(x, y, z) {
        const p = this.particles[this.head];
        p.life = 1.0;
        p.x = x;
        p.y = y;
        p.z = z;
        this.head = (this.head + 1) % this.maxParticles;
    }

    setColor(hex) {
        this.points.material.uniforms.uColor.value.setHex(hex);
    }

    update(dt) {
        const pos = this.geometry.attributes.position.array;
        const alpha = this.geometry.attributes.aAlpha.array;
        const size = this.geometry.attributes.aSize.array;

        for (let i = 0; i < this.maxParticles; i++) {
            const p = this.particles[i];
            if (p.life > 0) {
                p.life -= dt * 1.8; // fade speed
                const l = Math.max(0, p.life);
                pos[i * 3] = p.x;
                pos[i * 3 + 1] = p.y;
                pos[i * 3 + 2] = p.z;
                alpha[i] = l * 0.8;
                size[i] = l * 0.5 + 0.1;
            } else {
                alpha[i] = 0;
                size[i] = 0;
            }
        }
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.aAlpha.needsUpdate = true;
        this.geometry.attributes.aSize.needsUpdate = true;
    }

    setVisible(v) {
        this.points.visible = v;
    }
}

// ===== Shockwave Ring — expanding ring on dice landing =====
export class Shockwave {
    constructor(scene) {
        const geometry = new THREE.RingGeometry(0.5, 0.6, 64);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uColor: { value: new THREE.Color(0xffaa44) },
                uProgress: { value: 0 },
                uOpacity: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform float uProgress;
                uniform float uOpacity;
                varying vec2 vUv;
                void main() {
                    // Ring edge glow — fades toward outer edge
                    float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
                    float fade = 1.0 - uProgress;
                    gl_FragColor = vec4(uColor, edge * fade * uOpacity);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide,
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -Math.PI / 2; // lay flat on ground
        this.mesh.visible = false;
        scene.add(this.mesh);

        this.progress = 1; // 1 = finished
        this.active = false;
    }

    trigger(x, y, z, color = 0xffaa44) {
        this.mesh.position.set(x, y, z);
        this.mesh.material.uniforms.uColor.value.setHex(color);
        this.progress = 0;
        this.active = true;
        this.mesh.visible = true;
    }

    update(dt) {
        if (!this.active) return;
        this.progress += dt * 1.5; // expand speed
        if (this.progress >= 1) {
            this.active = false;
            this.mesh.visible = false;
            return;
        }
        const scale = 0.5 + this.progress * 4.0; // expands outward
        this.mesh.scale.setScalar(scale);
        this.mesh.material.uniforms.uProgress.value = this.progress;
        this.mesh.material.uniforms.uOpacity.value = 1.0;
    }
}
