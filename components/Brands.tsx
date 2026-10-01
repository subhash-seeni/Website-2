'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BRANDS_DATA, type BrandData } from '@/lib/brands';
import styles from './Brands.module.css';

export default function Brands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedIndex(activeIndex);
      return;
    }

    setIsFading(true);
    const timer = setTimeout(() => {
      setDisplayedIndex(activeIndex);
      setIsFading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeIndex, displayedIndex]);

  const activeBrand: BrandData = BRANDS_DATA[activeIndex];
  const displayedBrand: BrandData = BRANDS_DATA[displayedIndex];

  return (
    <section className={`band-light ${styles.sectionBrands}`} id="brands" aria-labelledby="brands-title">
      <div className="container">
        
        {/* Skip Link for Keyboard Accessibility */}
        <a href="#formats" className={styles.skipBrandsLink}>
          Skip Category Brands Showcase →
        </a>

        <div className="section-meta">
          <span className="section-num">02</span>
          <span>Category Brands</span>
        </div>

        <div className={styles.brandsIntro}>
          <h2 id="brands-title" className={styles.brandsTitle}>
            Specialized Consumer Verticals
          </h2>
          <p className={styles.brandsSubtitle}>
            Eleven dedicated consumer brands addressing distinct daily needs across food, wellness, lifestyle, and education.
          </p>
        </div>

        {/* Interactive Showcase Container */}
        <div className={styles.showcaseFrame} id="brands-showcase">
          
          {/* Left Solid Side Panel */}
          <div className={styles.showcaseSidebar}>
            
            <div>
              <span className={styles.progressBadge} aria-live="polite">
                {activeBrand.indexStr}
              </span>
              
              <div className={styles.brandLogoDisplay}>
                <Image
                  src={activeBrand.logo}
                  alt={`BOGO ${activeBrand.name} logo`}
                  width={220}
                  height={124}
                  className={styles.activeLogoImg}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.activeBrandName}>{activeBrand.name}</h3>
              <p className={styles.activeBrandTagline}>{activeBrand.oneLiner}</p>
            </div>

            {/* Architectural Brand Directory & Selector */}
            <div className={styles.brandIndexNav} role="tablist" aria-label="Brand Selector">
              <div className={styles.brandNavHeader}>
                <span className={styles.indexLabel}>Brand Directory</span>
                <div className={styles.navControls}>
                  <button
                    type="button"
                    className={styles.navArrowBtn}
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : BRANDS_DATA.length - 1))}
                    aria-label="Previous brand"
                    title="Previous brand"
                  >
                    ←
                  </button>
                  <span className={styles.navPageIndicator}>{activeBrand.indexStr}</span>
                  <button
                    type="button"
                    className={styles.navArrowBtn}
                    onClick={() => setActiveIndex((prev) => (prev < BRANDS_DATA.length - 1 ? prev + 1 : 0))}
                    aria-label="Next brand"
                    title="Next brand"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className={styles.tabGrid}>
                {BRANDS_DATA.map((brand, idx) => (
                  <button
                    key={brand.slug}
                    role="tab"
                    id={`brand-tab-${brand.slug}`}
                    aria-selected={idx === activeIndex}
                    aria-controls="brand-visual-panel"
                    className={`${styles.tabCard} ${idx === activeIndex ? styles.tabActive : ''} ${idx === 10 ? styles.tabFull : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <span className={styles.tabIndexNum}>{String(idx + 1).padStart(2, '0')}</span>
                    <span className={styles.tabBrandName}>{brand.name}</span>
                    <svg className={styles.tabChevron} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Brand Showcase Panel */}
          <div
            className={styles.showcaseVisual}
            id="brand-visual-panel"
            role="tabpanel"
            aria-labelledby={`brand-tab-${activeBrand.slug}`}
            aria-live="polite"
          >
            {/* Top Image Wrap */}
            <div className={`${styles.visualImageWrap} ${isFading ? styles.imageFading : ''}`}>
              <Image
                src={displayedBrand.image}
                alt={`BOGO ${displayedBrand.name} interior retail space`}
                width={1920}
                height={820}
                className={styles.visualImg}
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>

            {/* Concept Visualisation Caption */}
            <span className={`${styles.conceptCaption} ${isFading ? styles.imageFading : ''}`}>
              Concept visualisation
            </span>

            {/* Text Block Under Image */}
            <div className={`${styles.brandContentBlock} ${isFading ? styles.textFading : ''}`}>
              <p className={styles.brandDescription}>
                {displayedBrand.description}
              </p>

              <div className={styles.offeringsSection}>
                <div className={styles.offeringsHairline} aria-hidden="true" />
                <span className={styles.offeringsLabel}>What you&apos;ll find</span>
                
                <ol className={styles.offeringsList}>
                  {displayedBrand.offerings.map((item, idx) => (
                    <li key={item} className={styles.offeringItem}>
                      <span className={styles.offeringNum}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className={styles.offeringText}>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
