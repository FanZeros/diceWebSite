import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScene } from './scene.js';
import { initPostProcessing } from './postprocessing.js';
import { initScrollAnimations } from './scroll.js';
import { initTextAnimations } from './text.js';

gsap.registerPlugin(ScrollTrigger);

// ===== Section color themes (dark background with accent glows) =====
const SECTION_THEMES = [
    { bg: [0.04, 0.04, 0.08], accent: [1.0, 0.42, 0.21] },   // Hero: deep dark
    { bg: [0.05, 0.04, 0.03], accent: [0.94, 0.75, 0.15] },   // Roll: warm dark
    { bg: [0.04, 0.03, 0.08], accent: [0.65, 0.55, 0.98] },   // Collection: purple dark
    { bg: [0.03, 0.05, 0.04], accent: [0.2, 0.82, 0.6] },    // Combo: teal dark
    { bg: [0.05, 0.03, 0.06], accent: [0.96, 0.29, 0.69] },   // Breed: pink dark
    { bg: [0.05, 0.04, 0.03], accent: [1.0, 0.42, 0.21] },    // CTA: warm dark
];

// ===== App State =====
const state = {
    scroll: 0,
    scrollTarget: 0,
    mouse: { x: 0, y: 0 },
    mouseTarget: { x: 0, y: 0 },
    width: window.innerWidth,
    height: window.innerHeight,
    dpr: Math.min(window.devicePixelRatio, 2),
    time: 0,
    section: 0,
    loaded: false,
    // Drag interaction (Stage 1)
    drag: {
        active: false,
        lastX: 0,
        lastY: 0,
        velX: 0,
        velY: 0,
    },
    // Persistent hero spin accumulators (continuous, no jumps)
    spinX: 0,
    spinY: 0,
};

// ===== Init =====
const clock = new THREE.Clock();
const canvas = document.getElementById('webgl');
const scrollContainer = document.getElementById('scroll-container');

// Scene setup
const { scene, camera, renderer, dice, particles, lights, trail, shockwave } = initScene(canvas, state);
const composer = initPostProcessing(renderer, scene, camera, state);

// Scroll & Text animations
initScrollAnimations(scrollContainer, state);
initTextAnimations(scrollContainer);

// Start
window.addEventListener('load', () => {
    state.loaded = true;
    document.body.classList.add('loaded');
});
// Defer first frame to next tick so all module-level const bindings are fully initialized
// (avoids TDZ violations in bundled output)
requestAnimationFrame(animate);

// ===== Nav dots =====
const navDots = document.querySelectorAll('.nav-dot');
const scrollHint = document.querySelector('.scroll-hint');

navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        const maxScroll = scrollContainer.scrollHeight - state.height;
        const targetScroll = (index / 5) * maxScroll;
        scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
});

const navProgress = document.querySelector('.nav-progress');

function updateNavDots() {
    const currentSection = Math.round(state.scroll * 5);
    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSection);
    });
    // Update progress number
    if (navProgress) {
        navProgress.textContent = String(currentSection + 1).padStart(2, '0');
    }
    // Hide scroll hint after first scroll
    if (scrollHint && state.scroll > 0.02) {
        scrollHint.style.opacity = '0';
        scrollHint.style.transition = 'opacity 0.6s ease';
    }
}

// ===== Cursor glow =====
const cursorGlow = document.getElementById('cursor-glow');

// ===== Feature card parallax (mouse-driven depth) =====
const featureCards = document.querySelectorAll('.feature-card');
function updateCardParallax() {
    featureCards.forEach(card => {
        const depth = parseFloat(card.dataset.depth) || 0.5;
        const px = state.mouse.x * depth * 14;
        const py = state.mouse.y * depth * 14;
        // Only apply translate parallax; GSAP controls opacity/base-y on reveal
        card.style.setProperty('--px', `${px}px`);
        card.style.setProperty('--py', `${py}px`);
    });
}

// ===== Mouse tracking =====
window.addEventListener('mousemove', (e) => {
    state.mouseTarget.x = (e.clientX / state.width - 0.5) * 2;
    state.mouseTarget.y = (e.clientY / state.height - 0.5) * 2;
    // Move cursor glow
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// ===== Dice drag rotation (only active in Stage 1 / Hero section) =====
function isDragZone() {
    // Drag only enabled in Stage 1 (top of page, section < 0.9)
    return state.scroll < 0.18;
}

function onDragStart(clientX, clientY) {
    if (!isDragZone()) return;
    state.drag.active = true;
    state.drag.lastX = clientX;
    state.drag.lastY = clientY;
    state.drag.velX = 0;
    state.drag.velY = 0;
    document.body.style.cursor = 'grabbing';
}

function onDragMove(clientX, clientY) {
    if (!state.drag.active) return;
    const dx = clientX - state.drag.lastX;
    const dy = clientY - state.drag.lastY;
    // Convert pixel delta to rotation (radians) — feed directly into spin accumulator
    state.drag.velY = dx * 0.008;  // horizontal drag → Y rotation
    state.drag.velX = dy * 0.008;  // vertical drag → X rotation
    state.spinY += state.drag.velY;
    state.spinX += state.drag.velX;
    state.drag.lastX = clientX;
    state.drag.lastY = clientY;
}

function onDragEnd() {
    state.drag.active = false;
    document.body.style.cursor = '';
}

// Mouse events on canvas
canvas.addEventListener('mousedown', (e) => onDragStart(e.clientX, e.clientY));
window.addEventListener('mousemove', (e) => {
    if (state.drag.active) onDragMove(e.clientX, e.clientY);
});
window.addEventListener('mouseup', onDragEnd);

// Touch events
canvas.addEventListener('touchstart', (e) => {
    if (isDragZone() && e.touches.length === 1) {
        onDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: true });
canvas.addEventListener('touchmove', (e) => {
    if (state.drag.active && e.touches.length === 1) {
        onDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: true });
canvas.addEventListener('touchend', onDragEnd, { passive: true });

// Hover cursor hint
canvas.addEventListener('mousemove', () => {
    if (!state.drag.active) {
        canvas.style.cursor = isDragZone() ? 'grab' : 'default';
    }
});

// ===== Resize (debounced) =====
let resizeTimer;
function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        state.width = window.innerWidth;
        state.height = window.innerHeight;
        state.dpr = Math.min(window.devicePixelRatio, 2);
        if (!camera) return; // not yet initialized

        camera.aspect = state.width / state.height;
        camera.updateProjectionMatrix();

        renderer.setSize(state.width, state.height);
        renderer.setPixelRatio(state.dpr);
        composer.setSize(state.width, state.height);
    }, 100);
}
window.addEventListener('resize', onResize);

// ===== Keyboard navigation =====
window.addEventListener('keydown', (e) => {
    const maxScroll = scrollContainer.scrollHeight - state.height;
    const sectionHeight = maxScroll / 5;
    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        const next = Math.min(Math.floor(state.scrollTarget * 5) + 1, 5);
        scrollContainer.scrollTo({ top: next * sectionHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = Math.max(Math.ceil(state.scrollTarget * 5) - 1, 0);
        scrollContainer.scrollTo({ top: prev * sectionHeight, behavior: 'smooth' });
    }
});

// ===== Scroll sync =====
scrollContainer.addEventListener('scroll', () => {
    const maxScroll = scrollContainer.scrollHeight - state.height;
    state.scrollTarget = maxScroll > 0 ? scrollContainer.scrollTop / maxScroll : 0;
});

// ===== Framerate-independent lerp (Active Theory technique) =====
function flerp(alpha, dt) {
    return 1 - Math.exp(Math.log(1 - Math.min(alpha, 0.999)) * (dt * 60));
}

// ===== Section color interpolation =====
function getSectionColor(scroll, key) {
    const totalSections = SECTION_THEMES.length - 1;
    const rawSection = scroll * totalSections;
    const idx = Math.min(Math.floor(rawSection), totalSections - 1);
    const t = rawSection - idx;

    const a = SECTION_THEMES[idx][key];
    const b = SECTION_THEMES[Math.min(idx + 1, totalSections)][key];
    return [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t,
    ];
}

// ===== Animation Loop =====
function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    state.time += dt;

    // Smooth scroll & mouse (frame-rate independent)
    const scrollLerp = flerp(0.06, dt);
    const mouseLerp = flerp(0.04, dt);
    state.scroll += (state.scrollTarget - state.scroll) * scrollLerp;
    state.mouse.x += (state.mouseTarget.x - state.mouse.x) * mouseLerp;
    state.mouse.y += (state.mouseTarget.y - state.mouse.y) * mouseLerp;

    // Current section (0-5)
    state.section = Math.floor(state.scroll * 5.999);

    // Update nav dots
    updateNavDots();

    // Update background color based on scroll
    updateBackground(dt);

    // Update dice choreography
    updateDice(dt);

    // Update particles
    updateParticles(dt);

    // Update effects (trail + shockwave)
    updateEffects(dt);

    // Update feature card parallax
    updateCardParallax();

    // Render
    composer.render(dt);
}

// ===== Throw trail + landing shockwave =====
let landingTriggered = false;
function updateEffects(dt) {
    const section = state.scroll * 5;
    const hero = dice.userData.hero;

    // --- Throw trail: emit particles during Stage 2 flight ---
    if (trail) {
        const inThrow = section >= 1 && section < 2;
        trail.setVisible(inThrow);
        if (inThrow && hero) {
            // Emit at hero position, tinted to hero's accent
            const throwT = section - 1;
            // Only emit during the fast-motion phases (launch + flight)
            if (throwT > 0.15 && throwT < 0.9) {
                trail.emit(hero.position.x, hero.position.y, hero.position.z);
            }
        }
        trail.update(dt);
    }

    // --- Landing shockwave: trigger once when entering Stage 3 ---
    if (shockwave) {
        // Detect crossing from Stage 2 into Stage 3 (section ~2.0)
        if (section >= 1.97 && section < 2.05 && !landingTriggered) {
            landingTriggered = true;
            // Shockwave at the landing point (where dice settles)
            shockwave.trigger(0, -0.6, -0.5, 0xffaa44);
        }
        if (section < 1.9 || section > 2.2) {
            landingTriggered = false; // reset so it can re-trigger
        }
        shockwave.update(dt);
    }
}

// Simulate bounce physics (scroll-driven, not time-driven)
// Returns a bounce value 0→peak→0 with decreasing amplitude
function simulateBounce(t) {
    // Damped sine — simulates a ball bouncing with energy loss
    const decay = Math.exp(-t * 4);
    const frequency = t * 12;
    return Math.abs(Math.sin(frequency)) * decay;
}

// Shortest-angle lerp: interpolates toward target via the shortest rotational
// path (wraps difference into [-PI, PI]). Avoids "unwinding" large accumulated
// rotations — the dice settles to a face without spinning multiple turns.
const TWO_PI = Math.PI * 2;
function lerpAngleShortest(current, target, t) {
    let diff = (target - current) % TWO_PI;
    if (diff > Math.PI) diff -= TWO_PI;
    else if (diff < -Math.PI) diff += TWO_PI;
    return current + diff * t;
}

function updateBackground(dt) {
    // Animate rim light color to match section accent
    if (lights && lights.rim) {
        const [ar, ag, ab] = getSectionColor(state.scroll, 'accent');
        lights.rim.color.setRGB(ar, ag, ab);
    }

    // Slowly drift the fog density based on section for flowing dark atmosphere
    if (scene && scene.fog) {
        const targetDensity = 0.015 + Math.sin(state.time * 0.1) * 0.005;
        scene.fog.density += (targetDensity - scene.fog.density) * 0.02;
    }

    // Animate glow orbs to float slowly (flowing nebula feel)
    if (scene) {
        scene.children.forEach((child, i) => {
            if (child.isMesh && child.material && child.material.transparent && child.geometry?.type === 'SphereGeometry') {
                const baseY = child.position.y;
                child.position.y += Math.sin(state.time * 0.15 + i * 1.7) * dt * 0.08;
                child.position.x += Math.cos(state.time * 0.1 + i * 2.3) * dt * 0.05;
                // Pulse opacity
                const pulse = 0.7 + Math.sin(state.time * 0.2 + i * 1.1) * 0.3;
                child.material.opacity = child.userData.baseOpacity
                    ? child.userData.baseOpacity * pulse
                    : child.material.opacity;
            }
        });
    }
}

function updateDice(dt) {
    if (!dice) return;
    const t = state.scroll;
    const time = state.time;
    const section = t * 5; // 0-5 mapped to 6 sections

    const hero = dice.userData.hero;
    const orbiters = dice.userData.orbiters;
    const collection = dice.userData.collection;

    // Decay spin accumulators toward 0 once past Stage 1 (avoids carryover into throw)
    if (section >= 1 && !state.drag.active) {
        state.spinX *= 0.9;
        state.spinY *= 0.9;
        state.drag.velX *= 0.9;
        state.drag.velY *= 0.9;
    }

    // ===== 3-STAGE CINEMATIC DICE ANIMATION =====
    //
    // Stage 1 (section 0-1): CLOSE-UP INSPECTION
    //   Dice very near camera, slow majestic rotation, showing beveled detail
    //
    // Stage 2 (section 1-2): THE THROW
    //   Dice pulls back, launches away with arc trajectory + aggressive tumble
    //
    // Stage 3 (section 2-3): LANDING & ARRANGEMENT
    //   Multiple dice settle into a row, each showing a specific face
    //
    // Section 3-5: Continue with Combo/Breed/CTA

    let targetX = 0, targetY = 0, targetZ = 0, targetScale = 1;
    let rotX = 0, rotY = 0, rotZ = 0;

    if (section < 1) {
        // ===== STAGE 1: CLOSE-UP INSPECTION =====
        // Dice is BIG and close, rotating slowly to show off the beveled faces + shader
        const inspectT = section; // 0→1

        // Scale: starts very large (fills screen), gradually pulls back slightly
        targetScale = 1.6 - inspectT * 0.3;

        // Position: centered, slight float
        targetY = Math.sin(time * 0.3) * 0.08;
        targetZ = 1.0 - inspectT * 0.5; // starts close to camera, eases back

        // Rotation: persistent spin accumulator (continuous, no jumps)
        // — idle auto-spin OR drag both feed state.spinX/spinY smoothly
        if (!state.drag.active) {
            // Gentle idle auto-rotation
            state.spinY += dt * 0.25;
            // Drag inertia (decays via friction)
            state.spinY += state.drag.velY;
            state.spinX += state.drag.velX;
            state.drag.velX *= 0.92;
            state.drag.velY *= 0.92;
        }
        // Clamp X spin so dice doesn't flip endlessly vertically
        state.spinX = Math.max(-1.2, Math.min(1.2, state.spinX));

        rotX = inspectT * Math.PI * 0.5 + state.spinX;
        rotY = inspectT * Math.PI * 0.6 + state.spinY;
        rotZ = Math.sin(time * 0.15) * 0.03;

        // Mouse tilt (only when not dragging)
        if (!state.drag.active) {
            targetX += state.mouse.x * 0.15;
            targetY += -state.mouse.y * 0.1;
        }

    } else if (section < 2) {
        // ===== STAGE 2: THE THROW =====
        // Scroll drives the throw arc: wind-up → launch → fly → slow down
        const throwT = section - 1; // 0→1

        // Wind-up phase (first 15%): dice pulls back slightly
        // Launch phase (15-40%): rapid forward motion
        // Flight phase (40-85%): arc with spin
        // Deceleration (85-100%): slowing down before landing

        let phase;
        if (throwT < 0.15) {
            // Wind-up: pull back
            phase = 'windup';
            const wt = throwT / 0.15;
            targetZ = 0.5 + wt * 0.3; // pulls toward camera
            targetY = -wt * 0.2; // dips down
            targetScale = 1.3 + wt * 0.1;
            rotX = time * 0.08 - wt * 0.2;
            rotY = time * 0.12;
            rotZ = -wt * 0.15; // tilts back
        } else if (throwT < 0.4) {
            // Launch: explosive forward
            phase = 'launch';
            const lt = (throwT - 0.15) / 0.25;
            const easeOut = 1 - (1 - lt) * (1 - lt); // quadratic ease out
            targetZ = 0.8 - easeOut * 2.5; // flies away from camera
            targetY = -0.2 + easeOut * 1.0; // arcs upward
            targetX = easeOut * 0.5; // slight rightward drift
            targetScale = 1.4 - easeOut * 0.5;
            // Controlled spin during launch (~1 turn)
            rotX = lt * Math.PI * 1.2;
            rotY = lt * Math.PI * 1.5;
            rotZ = lt * Math.PI * 0.4;
        } else if (throwT < 0.85) {
            // Flight: parabolic arc with continued spin
            phase = 'flight';
            const ft = (throwT - 0.4) / 0.45;
            const parabola = 4 * ft * (1 - ft); // peaks at 0.5
            targetZ = -1.7 + ft * 0.5;
            targetY = 0.8 + parabola * 0.8 - ft * 1.2; // arc then descend
            targetX = 0.5 + ft * 0.3;
            targetScale = 0.9;
            // Spin continues but decelerates (limited total rotation)
            const spinDecay = 1 - ft * 0.6;
            rotX = Math.PI * 1.2 + ft * Math.PI * 0.8 * spinDecay;
            rotY = Math.PI * 1.5 + ft * Math.PI * 1.0 * spinDecay;
            rotZ = Math.PI * 0.4 + ft * Math.PI * 0.3 * spinDecay;
        } else {
            // Deceleration: approaching landing
            phase = 'decel';
            const dt2 = (throwT - 0.85) / 0.15;
            const easeIn = dt2 * dt2;
            targetZ = -1.2 + easeIn * 0.5;
            targetY = -0.4 + simulateBounce(dt2) * 0.3; // small bounce
            targetX = 0.8 - easeIn * 0.8; // returns to center
            targetScale = 0.9 - easeIn * 0.1;
            // Spin settles smoothly
            rotX = Math.PI * 2.0 + dt2 * 0.15;
            rotY = Math.PI * 2.5 + dt2 * 0.1;
            rotZ = Math.PI * 0.7;
        }

    } else if (section < 3) {
        // ===== STAGE 3: COLLECTION — hero exits, small dice perform =====
        // Hero quickly shrinks to nothing so the collection dice are the stars
        const landT = section - 2; // 0→1
        const exit = Math.min(1, landT * 3); // shrink out in first 1/3

        targetX = 0;
        targetY = -0.3;
        targetZ = -0.5;
        targetScale = 0.6 * (1 - exit); // → 0 (hidden)
        // Settle to a face while shrinking
        rotX = Math.PI * 0.5;
        rotY = 0;
        rotZ = 0;

    } else if (section < 4) {
        // COMBO: hero re-enters, orbiters surround it
        const comboIn = Math.min(1, (section - 3) * 3); // grow back in
        targetX = 0;
        targetScale = 0.8 * comboIn;
        targetY = 0.1;
        rotX = Math.PI * 0.2 + Math.sin(time * 0.3) * 0.06;
        rotY = time * 0.08;
        rotZ = 0.03;
    } else if (section < 5) {
        // BREED: Ascend
        const breedT = section - 4;
        targetY = -0.4 + breedT * 2.0 + Math.sin(time * 0.3) * 0.06;
        targetScale = 0.8 + breedT * 0.35;
        rotX = Math.sin(time * 0.35) * 0.12;
        rotY = time * 0.35;
        rotZ = Math.cos(time * 0.3) * 0.06;
    } else {
        // CTA: Hero moment
        targetScale = 1.3;
        targetY = Math.sin(time * 0.2) * 0.05;
        rotX = Math.sin(time * 0.1) * 0.06;
        rotY = time * 0.04;
        rotZ = 0;
    }

    // ===== Scroll velocity → subtle rotation turbulence (Stage 2 throw only) =====
    if (section >= 1 && section < 2) {
        const scrollVelocity = Math.abs(state.scrollTarget - state.scroll);
        rotZ += Math.cos(time * 4) * scrollVelocity * 0.6;
    }

    // Mouse parallax (skip in Stage 1 — handled above; reduced during throw)
    if (section >= 1) {
        const mouseStrength = section < 2 ? 0.05 : 0.15;
        targetX += state.mouse.x * mouseStrength;
        targetY += -state.mouse.y * mouseStrength * 0.7;
    }

    // Apply to hero dice with smooth interpolation
    const pl = flerp(0.04, dt);
    // Responsive rotation when dragging, faster during throw
    let rlBase = 0.05;
    if (section >= 1 && section < 2) rlBase = 0.08;
    if (state.drag.active) rlBase = 0.3;
    const rl = flerp(rlBase, dt);
    hero.position.x += (targetX - hero.position.x) * pl;
    hero.position.y += (targetY - hero.position.y) * pl;
    hero.position.z += (targetZ - hero.position.z) * pl;

    // Rotation interpolation:
    // - Stage 1-2 (section < 2): raw lerp → allows multi-turn tumbling during throw
    // - Stage 3+ (section >= 2): shortest-angle lerp → settles to face quickly
    //   without "unwinding" the accumulated throw rotation (no fast spin)
    if (section < 2) {
        hero.rotation.x += (rotX - hero.rotation.x) * rl;
        hero.rotation.y += (rotY - hero.rotation.y) * rl;
        hero.rotation.z += (rotZ - hero.rotation.z) * rl;
    } else {
        hero.rotation.x = lerpAngleShortest(hero.rotation.x, rotX, rl);
        hero.rotation.y = lerpAngleShortest(hero.rotation.y, rotY, rl);
        hero.rotation.z = lerpAngleShortest(hero.rotation.z, rotZ, rl);
    }
    const cs = hero.scale.x;
    hero.scale.setScalar(cs + (targetScale - cs) * flerp(0.06, dt));

    // Hide hero entirely when it shrinks out (Collection section) to avoid a lingering speck
    hero.visible = hero.scale.x > 0.04;

    // Hero inner glow pulse
    const heroLight = hero.children.find(c => c.isPointLight);
    if (heroLight) heroLight.intensity = 0.15 + Math.sin(time * 1.5) * 0.1;

    // Update shader uniforms (uTime) for all shader dice
    [hero, ...orbiters, ...collection].forEach(d => {
        if (d.userData.shaderMat) d.userData.shaderMat.uniforms.uTime.value = time;
    });

    // ===== STAGE 3: Collection dice arrange showing face values =====
    const landStart = 2, landEnd = 3.5;
    const landAlpha = Math.max(0, Math.min(1, (section - landStart) / 0.6)) *
                      Math.max(0, Math.min(1, (landEnd - section) / 0.5));

    // Face rotations to show specific dot counts (1-6 + bonus)
    const faceRotations = [
        { x: 0, y: 0, z: 0 },                    // face 1 (front)
        { x: 0, y: Math.PI, z: 0 },              // face 2 (back)
        { x: 0, y: Math.PI / 2, z: 0 },          // face 3 (right)
        { x: 0, y: -Math.PI / 2, z: 0 },         // face 4 (left)
        { x: -Math.PI / 2, y: 0, z: 0 },         // face 5 (top)
        { x: Math.PI / 2, y: 0, z: 0 },          // face 6 (bottom)
        { x: Math.PI / 4, y: Math.PI / 4, z: 0 },// bonus (tilted)
    ];

    // Centered showcase layout: 4 dice top row + 3 dice bottom row
    const topRow = [0, 1, 2, 3];
    const botRow = [4, 5, 6];
    const layout = [];
    topRow.forEach((idx, k) => layout[idx] = { col: k, row: 0, cols: 4 });
    botRow.forEach((idx, k) => layout[idx] = { col: k, row: 1, cols: 3 });

    collection.forEach((cd, i) => {
        cd.visible = landAlpha > 0.01;
        if (!cd.visible) return;

        // Staggered entrance: each die arrives slightly later
        const stagger = i * 0.07;
        const dieAlpha = Math.max(0, Math.min(1, (landAlpha - stagger) / (1 - stagger)));
        const easeAlpha = 1 - (1 - dieAlpha) * (1 - dieAlpha); // ease out

        // Grid position (centered)
        const lay = layout[i];
        const hSpacing = 0.95;
        const vSpacing = 0.95;
        const targetDieX = (lay.col - (lay.cols - 1) / 2) * hSpacing;
        const targetDieY = 0.35 - lay.row * vSpacing; // centered around screen middle

        // Entry: fall from above + settle bounce
        const entryY = targetDieY + (1 - easeAlpha) * 3.5;
        const bounceOffset = easeAlpha > 0.8 ? simulateBounce((easeAlpha - 0.8) / 0.2) * 0.18 : 0;

        // Post-landing idle "performance": gentle float + bob (only when settled)
        const settled = easeAlpha > 0.95 ? 1 : 0;
        const floatY = settled * Math.sin(time * 1.2 + i * 0.9) * 0.06;
        const floatX = settled * Math.cos(time * 0.8 + i * 1.3) * 0.03;

        cd.position.x = targetDieX * easeAlpha + floatX;
        cd.position.y = entryY + bounceOffset + floatY;
        cd.position.z = -0.5;

        // Rotation: spin fast during entry → settle to face → gentle idle spin
        const face = faceRotations[i % faceRotations.length];
        const spinFactor = 1 - easeAlpha;
        const idleSpin = settled * time * (0.2 + (i % 3) * 0.08);
        cd.rotation.x = face.x + spinFactor * Math.PI * 4 * (1 + i * 0.3);
        cd.rotation.y = face.y + spinFactor * Math.PI * 3 + idleSpin;
        cd.rotation.z = face.z + spinFactor * 0.5;

        // Bigger — these are the stars of this section
        cd.scale.setScalar(0.62 * easeAlpha);
    });

    // ===== Orbiters (Combo section) =====
    const showOrbiters = (section >= 3 && section < 4);
    const orbiterAlpha = showOrbiters ? Math.min(1, (section - 3) / 0.4) : 0;

    orbiters.forEach((orb, i) => {
        orb.visible = orbiterAlpha > 0.01;
        if (!orb.visible) return;
        const { orbitAngle, orbitRadius, orbitSpeed, yOffset } = orb.userData;
        const a = orbitAngle + time * orbitSpeed;
        const r = orbitRadius * orbiterAlpha * 0.8;
        orb.position.x = hero.position.x + Math.cos(a) * r;
        orb.position.y = hero.position.y + Math.sin(a * 0.6) * 0.4 + yOffset * orbiterAlpha;
        orb.position.z = Math.sin(a) * r * 0.3 - 0.3;
        orb.rotation.x = time * (orbitSpeed + 0.3);
        orb.rotation.y = time * (orbitSpeed + 0.2);
        orb.scale.setScalar(orbiterAlpha * 0.8);
    });
}

function updateParticles(dt) {
    if (!particles) return;

    // Layer 1: Dust
    const positions = particles.geometry.attributes.position.array;
    const count = positions.length / 3;
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += dt * 0.04 * (0.3 + Math.sin(i * 0.1) * 0.7);
        if (positions[i3 + 1] > 4) positions[i3 + 1] = -4;
        positions[i3] += Math.sin(state.time * 0.2 + i * 0.3) * dt * 0.015;
    }
    particles.geometry.attributes.position.needsUpdate = true;
    particles.rotation.y = state.time * 0.012;

    // Layer 2: Accent particles
    const accent = particles.userData.accent;
    if (accent) {
        const ap = accent.geometry.attributes.position.array;
        const ac = ap.length / 3;
        for (let i = 0; i < ac; i++) {
            const i3 = i * 3;
            ap[i3 + 1] += dt * 0.06 * (0.4 + Math.cos(i * 0.2) * 0.6);
            if (ap[i3 + 1] > 6) ap[i3 + 1] = -6;
            ap[i3] += Math.cos(state.time * 0.15 + i * 0.7) * dt * 0.025;
        }
        accent.geometry.attributes.position.needsUpdate = true;
        accent.rotation.y = -state.time * 0.008;

        // Accent particle color follows section theme
        const [ar, ag, ab] = getSectionColor(state.scroll, 'accent');
        accent.material.color.setRGB(ar, ag, ab);
    }
}

