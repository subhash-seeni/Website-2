'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNav } from './NavContext';
import { NAV_GROUPS, LEGAL_LINKS, SOCIAL_LINKS, type SitemapItem } from '@/lib/nav';
import styles from './NavOverlay.module.css';

export default function NavOverlay() {
  const { isOpen, closeMenu } = useNav();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Group lookups from navigation config
  const companyGroup = NAV_GROUPS.find((g) => g.id === 'company')!;
  const brandsGroup = NAV_GROUPS.find((g) => g.id === 'brands')!;
  const formatsGroup = NAV_GROUPS.find((g) => g.id === 'formats')!;
  const technologyGroup = NAV_GROUPS.find((g) => g.id === 'technology')!;
  const distributionGroup = NAV_GROUPS.find((g) => g.id === 'distribution')!;
  const programsGroup = NAV_GROUPS.find((g) => g.id === 'programs')!;
  const connectGroup = NAV_GROUPS.find((g) => g.id === 'connect')!;

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
        gsap.set(overlay, { clipPath: 'none', opacity: 1, display: 'flex' });
        setIsAnimating(false);
        return;
      }

      // Restrained opening wipe: ~700ms, expo.out
      gsap.set(overlay, { display: 'flex' });
      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      tl.fromTo(
        overlay,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.65, ease: 'expo.out' }
      );

      const cols = overlay.querySelectorAll(`.${styles.navGroupCol}`);
      if (cols.length > 0) {
        tl.fromTo(
          cols,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.03 },
          '-=0.4'
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
        duration: 0.35,
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
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

    // Initial focus on first interactive element
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
        
        {/* Main Columns Container (Text only, strong hierarchy) */}
        <div className={styles.mainContainer}>
          <div className={styles.columnsGrid}>
            
            {/* 01 Company */}
            <div className={styles.navGroupCol}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>{companyGroup.num}</span>
                <div className={styles.groupHairline} aria-hidden="true" />
                <h2 className={styles.groupTitle}>{companyGroup.title}</h2>
              </div>
              <ul className={styles.linksList}>
                {companyGroup.links.map(renderLinkItem)}
              </ul>
            </div>

            {/* 02 Brands */}
            <div className={`${styles.navGroupCol} ${styles.brandsCol}`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>{brandsGroup.num}</span>
                <div className={styles.groupHairline} aria-hidden="true" />
                <Link
                  href={brandsGroup.indexRoute!}
                  onClick={closeMenu}
                  className={styles.groupTitleLink}
                  aria-current={isCurrent(brandsGroup.indexRoute!) ? 'page' : undefined}
                >
                  <h2 className={styles.groupTitle}>{brandsGroup.title}</h2>
                </Link>
              </div>
              <div className={styles.brandsSubGrid}>
                <ul className={styles.linksList}>
                  {brandsGroup.subColumns?.col1.map(renderLinkItem)}
                </ul>
                <ul className={styles.linksList}>
                  {brandsGroup.subColumns?.col2.map(renderLinkItem)}
                </ul>
              </div>
            </div>

            {/* 03 Formats */}
            <div className={styles.navGroupCol}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>{formatsGroup.num}</span>
                <div className={styles.groupHairline} aria-hidden="true" />
                <Link
                  href={formatsGroup.indexRoute!}
                  onClick={closeMenu}
                  className={styles.groupTitleLink}
                  aria-current={isCurrent(formatsGroup.indexRoute!) ? 'page' : undefined}
                >
                  <h2 className={styles.groupTitle}>{formatsGroup.title}</h2>
                </Link>
              </div>
              <ul className={styles.linksList}>
                {formatsGroup.links.map(renderLinkItem)}
              </ul>
            </div>

            {/* 04 Technology & 05 Distribution (stacked to balance vertical height) */}
            <div className={styles.navGroupCol}>
              <div className={styles.groupBlock}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupNum}>{technologyGroup.num}</span>
                  <div className={styles.groupHairline} aria-hidden="true" />
                  <Link
                    href={technologyGroup.indexRoute!}
                    onClick={closeMenu}
                    className={styles.groupTitleLink}
                    aria-current={isCurrent(technologyGroup.indexRoute!) ? 'page' : undefined}
                  >
                    <h2 className={styles.groupTitle}>{technologyGroup.title}</h2>
                  </Link>
                </div>
                <ul className={styles.linksList}>
                  {technologyGroup.links.map(renderLinkItem)}
                </ul>
              </div>

              <div className={`${styles.groupBlock} ${styles.groupBlockStacked}`}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupNum}>{distributionGroup.num}</span>
                  <div className={styles.groupHairline} aria-hidden="true" />
                  <h2 className={styles.groupTitle}>{distributionGroup.title}</h2>
                </div>
                <ul className={styles.linksList}>
                  {distributionGroup.links.map(renderLinkItem)}
                </ul>
              </div>
            </div>

            {/* 06 Programs */}
            <div className={styles.navGroupCol}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>{programsGroup.num}</span>
                <div className={styles.groupHairline} aria-hidden="true" />
                <h2 className={styles.groupTitle}>{programsGroup.title}</h2>
              </div>
              <ul className={styles.linksList}>
                {programsGroup.links.map(renderLinkItem)}
              </ul>
            </div>

            {/* 07 Connect */}
            <div className={styles.navGroupCol}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>{connectGroup.num}</span>
                <div className={styles.groupHairline} aria-hidden="true" />
                <h2 className={styles.groupTitle}>{connectGroup.title}</h2>
              </div>
              <ul className={styles.linksList}>
                {connectGroup.links.map(renderLinkItem)}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Legal & Social Info */}
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
