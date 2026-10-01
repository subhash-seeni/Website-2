'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useNav } from './NavContext';
import styles from './Header.module.css';

export default function Header() {
  const { isOpen, toggleOpen } = useNav();

  return (
    <header
      className={`${styles.siteHeader} ${isOpen ? styles.headerOverlayActive : ''}`}
      role="banner"
    >
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Left: Logo */}
        <Link href="/" className={styles.headerLogoLink} aria-label="BOGO Homepage">
          <Image
            src="/Images/Logos/Bogo.png"
            alt="BOGO"
            width={140}
            height={78}
            priority
            className={styles.headerLogo}
          />
        </Link>

        {/* Right Navigation & Controls */}
        <div className={styles.headerRight}>
          
          {/* Desktop Nav Items (collapsed below 1024px) */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              <li>
                <Link href="/#ecosystem" className={styles.navLink}>
                  <span className={styles.navNum}>01</span> Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/#brands" className={styles.navLink}>
                  <span className={styles.navNum}>02</span> Brands
                </Link>
              </li>
              <li>
                <Link href="/#formats" className={styles.navLink}>
                  <span className={styles.navNum}>03</span> Formats
                </Link>
              </li>
              <li>
                <Link href="/#technology" className={styles.navLink}>
                  <span className={styles.navNum}>04</span> Technology
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action CTA & Menu Toggle */}
          <div className={styles.actionsWrap}>
            <Link href="/contact" className={styles.navCta}>
              Get in touch
            </Link>

            {/* Hamburger / Close Toggle Button */}
            <button
              type="button"
              id="nav-toggle-btn"
              className={`${styles.menuToggleBtn} ${isOpen ? styles.menuToggleOpen : ''}`}
              onClick={toggleOpen}
              aria-expanded={isOpen}
              aria-controls="nav-overlay"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={styles.hamburgerIcon} aria-hidden="true">
                <span className={`${styles.line} ${styles.line1}`} />
                <span className={`${styles.line} ${styles.line2}`} />
              </span>
              <span className={styles.menuBtnLabel}>
                {isOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
