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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                scroller: container,
                start: 'top 75%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
            },
        });

        if (title) {
            tl.to(title, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
            }, 0);
        }

        if (desc) {
            tl.to(desc, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
            }, 0.15);
        }

        if (badges) {
            tl.to(badges, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, 0.3);
        }

        if (buttons) {
            tl.to(buttons, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, 0.35);
        }
    });

    // Keep ScrollTrigger in sync
    container.addEventListener('scroll', () => {
        ScrollTrigger.update();
    });

    return { ScrollTrigger };
}
