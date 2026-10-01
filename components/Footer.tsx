'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigationConfig } from '@/config/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname() || '/';
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    const columnsEl = columnsRef.current;
    if (!footerEl || !columnsEl) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cols = columnsEl.querySelectorAll(`.${styles.footerCol}`);

    if (prefersReducedMotion) {
      gsap.set(cols, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(cols, { opacity: 0, y: 24 });

    const trigger = ScrollTrigger.create({
      trigger: columnsEl,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(cols, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.04,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (typeof window !== 'undefined' && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Move focus to top of the page
    const topEl = (document.getElementById('main-content') ||
      document.querySelector('.skip-link') ||
      document.body) as HTMLElement;
    if (topEl) {
      topEl.focus({ preventScroll: true });
    }
  };

  const isCurrentPage = (href: string) => {
    if (href.startsWith('#')) return undefined;
    return pathname === href ? 'page' : undefined;
  };

  const { footer, socialLinks, bottomBar } = navigationConfig;

  return (
    <footer className={styles.siteFooter} ref={footerRef} role="contentinfo" id="site-footer">
      <div className="container">
        
        {/* A. Brand Row */}
        <div className={styles.brandRow}>
          <div className={styles.brandInfo}>
            <Link href="#hero" className={styles.brandLogoLink} aria-label="BOGO - Back to top">
              <Image
                src="/Images/Logos/Bogo.png"
                alt="BOGO"
                width={130}
                height={72}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandTagline}>One vision. Endless possibilities.</p>
          </div>
          <div className={styles.brandAction}>
            <a href="#closing" className={styles.getInTouchBtn}>
              Get in touch
            </a>
          </div>
        </div>

        {/* B. Link Columns (desktop 5 columns, tablet 3, mobile 2; no accordions) */}
        <div className={styles.columnsGrid} ref={columnsRef}>
          
          {/* Column 1: Company */}
          <div className={styles.footerCol}>
            <div className={styles.colHairline} aria-hidden="true" />
            <h3 className={styles.colHeading}>{footer.company.title}</h3>
            <nav aria-label={footer.company.title}>
              <ul className={styles.linkList}>
                {footer.company.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      aria-current={isCurrentPage(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2: Brands (all 11 brands in two sub-columns, plus All Brands) */}
          <div className={styles.footerCol}>
            <div className={styles.colHairline} aria-hidden="true" />
            <h3 className={styles.colHeading}>{footer.brands.title}</h3>
            <nav aria-label={footer.brands.title}>
              <div className={styles.allBrandsWrap}>
                <a
                  href={footer.brands.allBrands.href}
                  className={styles.footerLink}
                  aria-current={isCurrentPage(footer.brands.allBrands.href)}
                >
                  {footer.brands.allBrands.label}
                </a>
              </div>
              <div className={styles.brandsSubGrid}>
                <ul className={styles.linkList}>
                  {footer.brands.subCol1.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        aria-current={isCurrentPage(link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className={styles.linkList}>
                  {footer.brands.subCol2.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        aria-current={isCurrentPage(link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Column 3: Formats */}
          <div className={styles.footerCol}>
            <div className={styles.colHairline} aria-hidden="true" />
            <h3 className={styles.colHeading}>{footer.formats.title}</h3>
            <nav aria-label={footer.formats.title}>
              <ul className={styles.linkList}>
                {footer.formats.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      aria-current={isCurrentPage(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Programs */}
          <div className={styles.footerCol}>
            <div className={styles.colHairline} aria-hidden="true" />
            <h3 className={styles.colHeading}>{footer.programs.title}</h3>
            <nav aria-label={footer.programs.title}>
              <ul className={styles.linkList}>
                {footer.programs.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      aria-current={isCurrentPage(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 5: Connect */}
          <div className={styles.footerCol}>
            <div className={styles.colHairline} aria-hidden="true" />
            <h3 className={styles.colHeading}>{footer.connect.title}</h3>
            <nav aria-label={footer.connect.title}>
              <ul className={styles.linkList}>
                {footer.connect.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      aria-current={isCurrentPage(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* D. Social Links (plain text links, LinkedIn first, target=_blank, rel=noopener noreferrer) */}
        <div className={styles.socialRow}>
          {socialLinks.map((social) => (
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

        {/* E. Disclaimers */}
        <div className={styles.disclaimersRow}>
          <p className={styles.disclaimerText}>
            Images are illustrative concept visualisations.
          </p>
          <div
            className={styles.legalDisclaimerSlot}
            aria-label="Disclaimer: TODO (legal to supply)"
          >
            {/* Slot labelled "Disclaimer: TODO (legal to supply)" - rendered empty until text is supplied */}
          </div>
        </div>

        {/* F. Bottom Bar (hairline above) */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarLeft}>
            <span className={styles.copyrightText}>
              &copy; {new Date().getFullYear()} BOGO
            </span>
            <Link
              href={bottomBar.privacyPolicy.href}
              className={styles.bottomLink}
              aria-current={isCurrentPage(bottomBar.privacyPolicy.href)}
            >
              {bottomBar.privacyPolicy.label}
            </Link>
            <Link
              href={bottomBar.termsOfUse.href}
              className={styles.bottomLink}
              aria-current={isCurrentPage(bottomBar.termsOfUse.href)}
            >
              {bottomBar.termsOfUse.label}
            </Link>
            <a
              href={bottomBar.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLink}
            >
              {bottomBar.website.label}
            </a>
          </div>
          <div className={styles.bottomBarRight}>
            <button
              type="button"
              onClick={handleBackToTop}
              className={styles.backToTopBtn}
              aria-label="Back to top"
            >
              Back to top &uarr;
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
