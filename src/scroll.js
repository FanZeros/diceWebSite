import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { spiralRevealSection } from './text.js';

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

    // Animate each section's content
    const sections = container.querySelectorAll('.section');

    sections.forEach((section) => {
        const title = section.querySelector('.section-title');
        const desc = section.querySelector('.section-desc');
        const badges = section.querySelector('.feature-badges');
        const buttons = section.querySelector('.cta-buttons');
        const cards = section.querySelectorAll('.feature-card');

        // Feature cards staggered reveal (animate CSS var so parallax composes)
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
                    start: 'top 60%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        }

        // Spiral reveal for section title (Active Theory style)
        if (title) {
            ScrollTrigger.create({
                trigger: section,
                scroller: container,
                start: 'top 70%',
                onEnter: () => spiralRevealSection(title),
                once: true,
            });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                scroller: container,
                start: 'top 75%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
            },
        });

        if (desc) {
            tl.to(desc, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
            }, 0.3);
        }

        if (badges) {
            tl.to(badges, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, 0.5);
        }

        if (buttons) {
            tl.to(buttons, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, 0.55);
        }
    });

    // Keep ScrollTrigger in sync
    container.addEventListener('scroll', () => {
        ScrollTrigger.update();
    });

    return { ScrollTrigger };
}
