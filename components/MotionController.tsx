'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function MotionController() {
  useEffect(() => {
    // Register GSAP plugins client-side only
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });

    (window as any).__lenis = lenis;

    // Wire Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Create matchMedia container
    const mm = gsap.matchMedia();

    // -------------------------------------------------------------------------
    // Viewport & Preference Matching
    // -------------------------------------------------------------------------
    mm.add(
      {
        isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          // Instantly show all final states
          gsap.set('[data-motion]', { opacity: 1, y: 0, clipPath: 'none' });
          return;
        }

        // =====================================================================
        // SECTION 1: HERO
        // Curtain reveal on load, headline line reveal, scrub down on scroll
        // =====================================================================
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTl.fromTo(
          '#hero-media',
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 1.1 }
        );

        heroTl.fromTo(
          '#hero h1',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.8'
        );

        heroTl.fromTo(
          ['#hero p', '#hero div[class*="heroActions"]', '#hero a'],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.6'
        );

        if (isDesktop) {
          gsap.to('#hero-media', {
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
            y: 35,
            ease: 'none',
          });
        }

        // =====================================================================
        // SECTION 2: 01 ECOSYSTEM (Deep Navy Band)
        // Five pillars sequence + SVG Structure Diagram node-by-node vector draw
        // =====================================================================
        gsap.fromTo(
          '#ecosystem h2, #ecosystem p[class*="ecosystemSubtitle"]',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#ecosystem',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
        gsap.fromTo(
          '#ecosystem div[class*="pillarCard"]',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#ecosystem div[class*="pillarsGrid"]',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        const vectors = gsap.utils.toArray<SVGPathElement>('#ecosystem svg path');
        vectors.forEach((v) => {
          try {
            const length = v.getTotalLength();
            gsap.set(v, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
          } catch {
            // Fallback
          }
        });

        if (vectors.length > 0) {
          gsap.to(vectors, {
            strokeDashoffset: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: '#ecosystem div[class*="diagramWrapper"]',
              start: 'top 65%',
              end: 'bottom 50%',
              scrub: 1,
            },
          });
        }

        gsap.fromTo(
          '#ecosystem div[class*="diagramTier"]',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#ecosystem div[class*="diagramWrapper"]',
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // =====================================================================
        // SECTION 4: 03 BRANDS
        // =====================================================================
        gsap.fromTo(
          '#brands-showcase',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#brands',
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // =====================================================================
        // SECTION 5: 04 FORMATS
        // Staggered clip-path frame reveals + subtle image parallax
        // =====================================================================
        const formatFrames = gsap.utils.toArray<HTMLElement>('#formats div[class*="formatImageFrame"]');
        if (formatFrames.length > 0) {
          gsap.fromTo(
            formatFrames,
            { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
            {
              clipPath: 'inset(0% 0 0 0)',
              opacity: 1,
              duration: 1.0,
              stagger: 0.18,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: '#formats div[class*="formatsGrid"]',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          if (isDesktop) {
            gsap.to('#formats img[class*="formatRenderImg"]', {
              y: -24,
              ease: 'none',
              scrollTrigger: {
                trigger: '#formats',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            });
          }
        }

        // =====================================================================
        // SECTION 6: 05 TECHNOLOGY (Sticky Split & Phase Scroll-linked Track)
        // =====================================================================
        const phaseBlocks = gsap.utils.toArray<HTMLElement>('#tech-scroll-content article');
        
        // Phase blocks fade and rise
        phaseBlocks.forEach((block, idx) => {
          gsap.fromTo(
            block,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Reveal image frame with clip-path
          const imgFrame = block.querySelector('div[class*="phaseMediaFrame"]');
          if (imgFrame) {
            gsap.fromTo(
              imgFrame,
              { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
              {
                clipPath: 'inset(0% 0 0 0)',
                opacity: 1,
                duration: 1.0,
                ease: 'expo.out',
                scrollTrigger: {
                  trigger: imgFrame,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }

          // Desktop: Track which phase is active to highlight index
          if (isDesktop) {
            ScrollTrigger.create({
              trigger: block,
              start: 'top 52%',
              end: 'bottom 48%',
              onToggle: (self) => {
                if (self.isActive) {
                  document.querySelectorAll('button[id^="tech-nav-btn-"]').forEach((btn, bIdx) => {
                    if (bIdx === idx) {
                      btn.classList.add('isActive');
                      // Find module class if hashed
                      btn.setAttribute('aria-current', 'true');
                    } else {
                      btn.classList.remove('isActive');
                      btn.setAttribute('aria-current', 'false');
                    }
                  });
                }
              },
            });
          }
        });

        // Vertical line fill scrub
        if (isDesktop) {
          gsap.fromTo(
            '#tech-timeline-line',
            { height: '0%' },
            {
              height: '100%',
              ease: 'none',
              scrollTrigger: {
                trigger: '#tech-scroll-content',
                start: 'top 45%',
                end: 'bottom 55%',
                scrub: 0.25,
              },
            }
          );
        }

        // Closing statement line reveal
        gsap.fromTo(
          '#tech-closing h3',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#tech-closing',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          '#tech-closing p',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#tech-closing',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );



        // =====================================================================
        // SECTION 8: CLOSING
        // =====================================================================
        gsap.fromTo(
          '#closing h2',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#closing',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          '#closing a[class*="closingBtn"]',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#closing',
              start: 'top 65%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    );

    // Refresh ScrollTrigger after assets initialize
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
