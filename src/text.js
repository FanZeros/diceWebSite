import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Active Theory-inspired spiral text reveal:
 * Each character starts at a position on a 3D spiral (rotated, scaled, offset)
 * and animates to its final resting position with stagger.
 */

// Split text node into individual character spans
function splitChars(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'block';
    const chars = [];
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        span.className = 'char';
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        element.appendChild(span);
        chars.push(span);
    }
    return chars;
}

// Generate spiral start values for each character
function getSpiralValues(index, total) {
    const angle = (index / total) * Math.PI * 2.5; // 2.5 turns of spiral
    const radius = 60 + index * 8; // expanding radius
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const rotation = (index / total) * 720 - 360; // full spins
    const rotateX = Math.sin(angle) * 80;
    const rotateY = Math.cos(angle) * 60;
    const scale = 0.2 + Math.random() * 0.3;
    return { x, y, rotation, rotateX, rotateY, scale };
}

export function initTextAnimations(container) {
    const heroLines = container.querySelectorAll('.hero-title .line');
    const heroSubtitle = container.querySelector('.hero-subtitle');

    // Hero title — spiral character reveal
    heroLines.forEach((line, lineIndex) => {
        const chars = splitChars(line);

        // Set initial spiral state
        chars.forEach((char, i) => {
            const spiral = getSpiralValues(i, chars.length);
            gsap.set(char, {
                x: spiral.x,
                y: spiral.y,
                rotation: spiral.rotation,
                rotateX: spiral.rotateX,
                rotateY: spiral.rotateY,
                scale: spiral.scale,
                opacity: 0,
                transformPerspective: 800,
            });
        });

        // Animate chars into place with stagger
        gsap.to(chars, {
            x: 0,
            y: 0,
            rotation: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            duration: 1.4,
            stagger: 0.04,
            ease: 'power3.out',
            delay: 0.5 + lineIndex * 0.3,
        });

        // Make line visible (was opacity: 0 from CSS)
        gsap.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.01,
            delay: 0.49 + lineIndex * 0.3,
        });
    });

    // Subtitle — gentle fade in with letter spacing animation
    if (heroSubtitle) {
        gsap.set(heroSubtitle, { opacity: 0, y: 20, letterSpacing: '0.8em' });
        gsap.to(heroSubtitle, {
            opacity: 1,
            y: 0,
            letterSpacing: '0.35em',
            duration: 1.2,
            ease: 'power2.out',
            delay: 1.6,
        });
    }
}

/**
 * Spiral reveal for section titles (called by scroll trigger)
 * Similar spiral but tighter and faster for in-page sections
 */
export function spiralRevealSection(element) {
    if (!element || element.dataset.spiralDone) return;
    element.dataset.spiralDone = '1';

    const chars = splitChars(element);

    chars.forEach((char, i) => {
        const total = chars.length;
        const angle = (i / total) * Math.PI * 1.8;
        const radius = 30 + i * 5;
        gsap.set(char, {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius * 0.6,
            rotation: (i / total) * 360 - 180,
            rotateX: Math.sin(angle) * 40,
            scale: 0.4,
            opacity: 0,
            transformPerspective: 600,
        });
    });

    gsap.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 1.0,
        stagger: 0.03,
        ease: 'power2.out',
    });
}
