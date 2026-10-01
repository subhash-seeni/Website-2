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
    // Desktop Viewports (>= 768px) and prefers-reduced-motion: no-preference
    // -------------------------------------------------------------------------
    mm.add(
      {
        isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, isMobile, reduceMotion } = context.conditions as {
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
        // Slow curtain mask reveal on load, headline line reveal, scrub down on scroll
        // =====================================================================
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Curtain reveal on image frame
        heroTl.fromTo(
          '#hero-media',
          { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
          { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 1.2 }
        );

        // Headline reveal
        heroTl.fromTo(
          '#hero h1',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.8'
        );

        // Subline and CTA buttons
        heroTl.fromTo(
          ['#hero p', '#hero .heroActions', '#hero a'],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.6'
        );

        if (isDesktop) {
          // Hero image scrub down to inset rounded frame
          gsap.to('#hero-media', {
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
            scale: 0.93,
            borderRadius: '16px',
            ease: 'none',
          });
        }

        // =====================================================================
        // SECTION 2: 01 VISION
        // Word-by-word opacity scrub as user reads
        // =====================================================================
        const words = gsap.utils.toArray<HTMLElement>('#vision span[class*="visionWord"]');
        if (words.length > 0) {
          gsap.fromTo(
            words,
            { opacity: 0.22 },
            {
              opacity: 1,
              stagger: 0.08,
              ease: 'none',
              scrollTrigger: {
                trigger: '#vision',
                start: 'top 70%',
                end: 'center 40%',
                scrub: 0.6,
              },
            }
          );
        }

        // Supporting line fade in
        gsap.fromTo(
          '#vision p[class*="visionSupporting"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#vision',
              start: 'center 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // =====================================================================
        // SECTION 3: 02 ECOSYSTEM
        // Five pillars sequence + SVG Structure Diagram node-by-node vector draw
        // =====================================================================
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

        // SVG vectors drawing
        const vectors = gsap.utils.toArray<SVGPathElement>('#ecosystem svg path');
        vectors.forEach((v) => {
          try {
            const length = v.getTotalLength();
            gsap.set(v, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
          } catch {
            // Fallback for non-rendered SVGs
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

        // Diagram tier nodes lighting up
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
        // Staggered reveals and smooth interactive transitions
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
            // Subtle parallax scrub on images
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
        // SECTION 6: 05 ROADMAP
        // Strategic timeline track line draw and phases sequential activation
        // =====================================================================
        gsap.fromTo(
          '#strategic-timeline-track div[class*="timelineTrackLine"]',
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#strategic-timeline-track',
              start: 'top 75%',
              end: 'bottom 50%',
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          '#strategic-timeline-track div[class*="phaseCard"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#strategic-timeline-track',
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Tech phases grid reveal
        gsap.fromTo(
          '#roadmap div[class*="techCard"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#roadmap div[class*="techGrid"]',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // =====================================================================
        // SECTION 7: CLOSING
        // Large statement slow line reveal
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
    }, 500);

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
