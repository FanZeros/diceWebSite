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

        // DNA helix: entire text block rotates around Z-axis into view
        // Alternating direction like DNA base-pairs
        const direction = sectionIndex % 2 === 0 ? 1 : -1;
        const startRotation = direction * 90; // ±90° start

        gsap.set(content, {
            rotateZ: startRotation,
            opacity: 0,
            scale: 0.7,
            transformOrigin: 'center center',
        });

        // Scroll-driven rotation: scrub from rotated → flat
        gsap.to(content, {
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                scroller: container,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 0.8, // tied to scroll position
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
