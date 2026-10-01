'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Brands.module.css';

export interface BrandData {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  image: string;
  indexStr: string;
}

export const BRANDS: BrandData[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'Everyday essentials for every home.',
    logo: '/Images/Logos/Essentials.png',
    image: '/Images/Outlet images/Essentials.png',
    indexStr: '01 / 11',
  },
  {
    id: 'daily',
    name: 'Daily',
    tagline: 'Your destination for everyday food essentials.',
    logo: '/Images/Logos/Daily.png',
    image: '/Images/Outlet images/Daily.png',
    indexStr: '02 / 11',
  },
  {
    id: 'farms',
    name: 'Farms',
    tagline: 'Pure. Organic. Naturally better.',
    logo: '/Images/Logos/Farms.png',
    image: '/Images/Outlet images/Farms.png',
    indexStr: '03 / 11',
  },
  {
    id: 'superfoods',
    name: 'Superfoods',
    tagline: 'Nutrition for a healthier tomorrow.',
    logo: '/Images/Logos/Superfoods.png',
    image: '/Images/Outlet images/Superfoods.png',
    indexStr: '04 / 11',
  },
  {
    id: 'health',
    name: 'Health',
    tagline: 'Wellness you can trust.',
    logo: '/Images/Logos/Health.png',
    image: '/Images/Outlet images/Health.png',
    indexStr: '05 / 11',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    tagline: 'Beauty that inspires confidence.',
    logo: '/Images/Logos/Beauty.png',
    image: '/Images/Outlet images/Beauty.png',
    indexStr: '06 / 11',
  },
  {
    id: 'luxe',
    name: 'Luxe',
    tagline: 'Premium products. Curated experiences.',
    logo: '/Images/Logos/Luxe.png',
    image: '/Images/Outlet images/Luxe.png',
    indexStr: '07 / 11',
  },
  {
    id: 'divine',
    name: 'Divine',
    tagline: 'Faith. Tradition. Devotion.',
    logo: '/Images/Logos/Divine.png',
    image: '/Images/Outlet images/Divine.png',
    indexStr: '08 / 11',
  },
  {
    id: 'paws',
    name: 'Paws',
    tagline: 'Everything your pets deserve.',
    logo: '/Images/Logos/Paws.png',
    image: '/Images/Outlet images/Paws.png',
    indexStr: '09 / 11',
  },
  {
    id: 'play',
    name: 'Play',
    tagline: 'Where imagination comes to life.',
    logo: '/Images/Logos/Play.png',
    image: '/Images/Outlet images/Play.png',
    indexStr: '10 / 11',
  },
  {
    id: 'classroom',
    name: 'Classroom',
    tagline: 'Learning beyond the classroom.',
    logo: '/Images/Logos/Classroom.png',
    image: '/Images/Outlet images/Classroom.png',
    indexStr: '11 / 11',
  },
];

export default function Brands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBrand = BRANDS[activeIndex];

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

        {/* Interactive / Pin Showcase Container */}
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
              <p className={styles.activeBrandTagline}>{activeBrand.tagline}</p>
            </div>

            {/* Clickable Brand Navigation Index */}
            <div className={styles.brandIndexNav} role="tablist" aria-label="Brand Selector">
              <span className={styles.indexLabel}>Brand Index:</span>
              <div className={styles.indexPills}>
                {BRANDS.map((brand, idx) => (
                  <button
                    key={brand.id}
                    role="tab"
                    id={`brand-tab-${brand.id}`}
                    aria-selected={idx === activeIndex}
                    aria-controls="brand-visual-panel"
                    className={`${styles.indexBtn} ${idx === activeIndex ? styles.isActive : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Concept Visual Panel */}
          <div className={styles.showcaseVisual} id="brand-visual-panel" role="tabpanel" aria-labelledby={`brand-tab-${activeBrand.id}`}>
            <div className={styles.visualImageWrap}>
              <Image
                src={activeBrand.image}
                alt={`BOGO ${activeBrand.name} interior concept rendering`}
                width={1920}
                height={820}
                className={styles.visualImg}
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
            <span className="concept-caption">Concept visualisation — BOGO {activeBrand.name} interior render</span>
          </div>

        </div>

      </div>
    </section>
  );
}
