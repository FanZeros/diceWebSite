import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollAnimations(container, state) {
    ScrollTrigger.defaults({
        scroller: container,
    });

    ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
            if (arguments.length) {
                container.scrollTop = value;
            }
            return container.scrollTop;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
    });

    // Animate each section's content — DNA helix Z-axis rotation
    const sections = container.querySelectorAll('.section');

    sections.forEach((section, sectionIndex) => {
        const content = section.querySelector('.section-content') || section.querySelector('.hero-content');
        const cards = section.querySelectorAll('.feature-card');

        if (!content) return;

        // Skip hero section (has its own char-level animation)
        if (section.classList.contains('section-hero')) return;

        // DNA helix: entire text block rotates around Y-axis from far to near
        // Alternating direction like DNA base-pairs
        const direction = sectionIndex % 2 === 0 ? 1 : -1;
        const startRotation = direction * 90; // ±90° around Y

        gsap.set(content, {
            rotateY: startRotation,
            opacity: 0,
            z: -200, // starts far away
            transformOrigin: 'center center',
            transformPerspective: 1000,
        });

        // Scroll-driven: rotates around Y-axis from side/back → facing viewer
        gsap.to(content, {
            rotateY: 0,
            opacity: 1,
            z: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                scroller: container,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 0.8,
            },
        });

        // Feature cards staggered reveal
        if (cards.length > 0) {
            gsap.to(cards, {
                opacity: 1,
                '--revealY': '0px',
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    scroller: container,
                    start: 'top 50%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        }
    });

    // Keep ScrollTrigger in sync
    container.addEventListener('scroll', () => {
        ScrollTrigger.update();
    });

    return { ScrollTrigger };
}
