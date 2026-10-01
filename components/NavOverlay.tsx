'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNav } from './NavContext';
import { NAV_GROUPS, LEGAL_LINKS, SOCIAL_LINKS, type NavGroup, type SitemapItem } from '@/lib/nav';
import styles from './NavOverlay.module.css';

export default function NavOverlay() {
  const { isOpen, closeMenu } = useNav();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    company: true, // first group open by default on mobile
  });

  const toggleAccordion = (groupId: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  // Open/Close Animations and Scroll Lock
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isOpen) {
      setIsAnimating(true);

      // Lock page scroll
      document.body.style.overflow = 'hidden';
      document.documentElement.style.scrollbarGutter = 'stable';
      if (typeof window !== 'undefined' && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }

      if (prefersReducedMotion) {
        gsap.set(overlay, { clipPath: 'none', opacity: 1, display: 'block' });
        setIsAnimating(false);
        return;
      }

      // Restrained opening wipe: ~700ms, expo.out
      gsap.set(overlay, { display: 'block' });
      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      tl.fromTo(
        overlay,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.7, ease: 'expo.out' }
      );

      const cols = overlay.querySelectorAll(`.${styles.navGroupCol}`);
      if (cols.length > 0) {
        tl.fromTo(
          cols,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.04 },
          '-=0.45'
        );
      }
    } else {
      if (!isAnimating && overlay.style.display === 'none') return;

      // Unlock page scroll
      document.body.style.overflow = '';
      document.documentElement.style.scrollbarGutter = '';
      if (typeof window !== 'undefined' && (window as any).__lenis) {
        (window as any).__lenis.start();
        ScrollTrigger.refresh();
      }

      if (prefersReducedMotion) {
        gsap.set(overlay, { display: 'none' });
        setIsAnimating(false);
        return;
      }

      setIsAnimating(true);
      gsap.to(overlay, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setIsAnimating(false);
        },
      });
    }
  }, [isOpen]);

  // Focus trap and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        const toggleBtn = document.getElementById('nav-toggle-btn');
        if (toggleBtn) toggleBtn.focus();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = overlay.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on first interactive element or container
    const initialFocus = overlay.querySelector<HTMLElement>('a, button');
    if (initialFocus) {
      initialFocus.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  const isCurrent = (route: string) => {
    return pathname === route;
  };

  const renderLinkItem = (link: SitemapItem) => {
    const active = isCurrent(link.route);
    return (
      <li key={link.id} className={styles.linkItem}>
        <Link
          href={link.route}
          onClick={closeMenu}
          className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
          aria-current={active ? 'page' : undefined}
        >
          {link.logo && (
            <span className={styles.linkLogoWrap} aria-hidden="true">
              <Image
                src={link.logo}
                alt=""
                width={24}
                height={24}
                className={styles.linkLogoImg}
              />
            </span>
          )}
          <span className={styles.linkText}>{link.label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div
      ref={overlayRef}
      id="nav-overlay"
      className={styles.navOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      style={{ display: 'none' }}
    >
      <div className={styles.overlayInner} ref={contentRef}>
        
        {/* Main Content Area */}
        <div className={styles.mainGrid}>
          
          {/* Left Third Panel */}
          <div className={styles.leftPanel}>
            <div className={styles.leftBrandTop}>
              <Link href="/" onClick={closeMenu} className={styles.leftLogoLink} aria-label="BOGO Homepage">
                <Image
                  src="/Images/Logos/Bogo.png"
                  alt="BOGO"
                  width={140}
                  height={78}
                  className={styles.leftLogoImg}
                />
              </Link>
              <p className={styles.leftTagline}>One vision. Endless possibilities.</p>
              <div className={styles.leftAction}>
                <Link href="/contact" onClick={closeMenu} className={styles.getInTouchBtn}>
                  Get in touch
                </Link>
              </div>
            </div>

            <div className={styles.leftVisualFrame}>
              <div className={styles.visualImgWrap}>
                <Image
                  src="/Images/Outlet images/Square.png"
                  alt="BOGO Square Flagship Exterior"
                  width={640}
                  height={400}
                  className={styles.visualImage}
                />
              </div>
              <span className={styles.visualCaption}>Concept visualisation</span>
            </div>
          </div>

          {/* Right Two-Thirds Panel: Desktop Grid / Mobile Accordions */}
          <div className={styles.rightPanel}>
            
            {/* Desktop Columns Grid */}
            <div className={styles.desktopGrid}>
              {NAV_GROUPS.map((group) => (
                <div key={group.id} className={styles.navGroupCol}>
                  <div className={styles.groupHeader}>
                    <span className={styles.groupNum}>{group.num}</span>
                    <div className={styles.groupHairline} aria-hidden="true" />
                    {group.indexRoute ? (
                      <Link
                        href={group.indexRoute}
                        onClick={closeMenu}
                        className={styles.groupTitleLink}
                        aria-current={isCurrent(group.indexRoute) ? 'page' : undefined}
                      >
                        <h2 className={styles.groupTitle}>{group.title}</h2>
                      </Link>
                    ) : (
                      <h2 className={styles.groupTitle}>{group.title}</h2>
                    )}
                  </div>

                  {group.subColumns ? (
                    <div className={styles.subColumnsGrid}>
                      <ul className={styles.linksList}>
                        {group.links.filter((l) => l.route === group.indexRoute).map(renderLinkItem)}
                        {group.subColumns.col1.map(renderLinkItem)}
                      </ul>
                      <ul className={styles.linksList}>
                        {group.subColumns.col2.map(renderLinkItem)}
                      </ul>
                    </div>
                  ) : (
                    <ul className={styles.linksList}>
                      {group.links.map(renderLinkItem)}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Accordions List */}
            <div className={styles.mobileAccordions}>
              {NAV_GROUPS.map((group) => {
                const isOpenAccordion = !!openAccordions[group.id];
                return (
                  <div key={group.id} className={styles.accordionItem}>
                    <button
                      type="button"
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(group.id)}
                      aria-expanded={isOpenAccordion}
                    >
                      <span className={styles.accordionHeaderLeft}>
                        <span className={styles.groupNum}>{group.num}</span>
                        <span className={styles.accordionTitle}>{group.title}</span>
                      </span>
                      <span className={styles.accordionIcon} aria-hidden="true">
                        {isOpenAccordion ? '−' : '+'}
                      </span>
                    </button>

                    {isOpenAccordion && (
                      <div className={styles.accordionBody}>
                        {group.indexRoute && (
                          <div className={styles.accordionIndexWrap}>
                            <Link
                              href={group.indexRoute}
                              onClick={closeMenu}
                              className={styles.accordionIndexLink}
                              aria-current={isCurrent(group.indexRoute) ? 'page' : undefined}
                            >
                              All {group.title} &rarr;
                            </Link>
                          </div>
                        )}
                        <ul className={styles.mobileLinksList}>
                          {group.links
                            .filter((l) => l.route !== group.indexRoute)
                            .map(renderLinkItem)}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyrightText}>&copy; {new Date().getFullYear()} BOGO</span>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.route}
                onClick={closeMenu}
                className={styles.bottomLink}
                aria-current={isCurrent(link.route) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.bogo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLink}
            >
              www.bogo.com
            </a>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.socialList}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
