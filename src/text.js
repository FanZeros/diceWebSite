import gsap from 'gsap';

/**
 * DNA Helix text reveal:
 * Characters start arranged vertically in a DNA double-helix pattern,
 * spinning around the Z-axis (screen-perpendicular axis), then unwind
 * into their final horizontal line position.
 */

function splitChars(element) {
    const text = element.textContent;
    element.textContent = '';
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

/**
 * DNA helix: characters spiral vertically around Z-axis
 * - Y offset: spread along vertical axis (helix backbone)
 * - X offset: sin wave (helix side-view curve)
 * - rotateZ: each char at different phase (like base-pair rotation)
 * - scale: depth illusion via cos wave
 */
function getHelixValues(index, total) {
    const t = index / Math.max(total - 1, 1); // 0→1
    const turns = 2.5; // number of helix turns
    const angle = t * Math.PI * 2 * turns;

    // Helix spread: characters start far apart vertically, converge to line
    const ySpread = (t - 0.5) * 400; // ±200px vertical spread
    // X oscillation: helix viewed from side
    const xOscillation = Math.sin(angle) * 80;
    // Z-rotation: each char rotated around Z like DNA base-pair
    const rotZ = angle * (180 / Math.PI); // full rotation in degrees
    // Scale: depth modulation (closer=bigger on one side of helix)
    const depthScale = 0.4 + Math.cos(angle) * 0.25;
    // Opacity: back-of-helix chars slightly faded
    const opacity = 0.3 + (Math.cos(angle) + 1) * 0.35;

    return { x: xOscillation, y: ySpread, rotateZ: rotZ, scale: depthScale, opacity };
}

export function initTextAnimations(container) {
    const heroLines = container.querySelectorAll('.hero-title .line');
    const heroSubtitle = container.querySelector('.hero-subtitle');

    heroLines.forEach((line, lineIndex) => {
        const chars = splitChars(line);

        // Set initial DNA helix positions
        chars.forEach((char, i) => {
            const helix = getHelixValues(i, chars.length);
            gsap.set(char, {
                x: helix.x,
                y: helix.y,
                rotateZ: helix.rotateZ,
                scale: helix.scale,
                opacity: 0,
            });
        });

        // Animate: helix unwinds into final text line
        gsap.to(chars, {
            x: 0,
            y: 0,
            rotateZ: 0,
            scale: 1,
            opacity: 1,
            duration: 1.6,
            stagger: 0.035,
            ease: 'power3.inOut',
            delay: 0.4 + lineIndex * 0.4,
        });

        // Reveal line container
        gsap.to(line, {
            opacity: 1,
            duration: 0.01,
            delay: 0.39 + lineIndex * 0.4,
        });
    });

    // Subtitle: letter-spacing unwind
    if (heroSubtitle) {
        gsap.set(heroSubtitle, { opacity: 0, y: 20, letterSpacing: '0.8em' });
        gsap.to(heroSubtitle, {
            opacity: 1,
            y: 0,
            letterSpacing: '0.35em',
            duration: 1.2,
            ease: 'power2.out',
            delay: 1.8,
        });
    }
}


