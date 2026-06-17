import gsap from 'gsap';

export function initTextAnimations(container) {
    const heroLines = container.querySelectorAll('.hero-title .line');
    const heroSubtitle = container.querySelector('.hero-subtitle');

    // Hero title — dramatic staggered reveal with 3D perspective
    gsap.to(heroLines, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.6,
    });

    if (heroSubtitle) {
        gsap.to(heroSubtitle, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            delay: 1.2,
        });
    }
}
