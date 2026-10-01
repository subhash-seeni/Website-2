'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Technology.module.css';

interface TechPhase {
  id: string;
  num: string;
  name: string;
  desc: string;
  image: string | null;
  caption?: string;
}

const TECH_PHASES: TechPhase[] = [
  {
    id: 'phase-01',
    num: '01',
    name: 'Purchase History',
    desc: 'A connected shopping history that helps customers understand their purchases, track spending, and plan future shopping with greater convenience.',
    image: '/Images/Technology section/1 Know .webp',
    caption: 'Concept visualisation — Connected customer shopping history & analytics',
  },
  {
    id: 'phase-02',
    num: '02',
    name: 'Smart Basket',
    desc: 'An intelligent basket that automatically tracks selected products while connecting shopping activity with the BOGO app and purchase history.',
    image: null,
  },
  {
    id: 'phase-03',
    num: '03',
    name: 'Concierge Service',
    desc: 'Customers can browse and pre-order from home, allowing them to arrive at the store and simply collect their prepared purchases.',
    image: null,
  },
  {
    id: 'phase-04',
    num: '04',
    name: 'Smart Trolley',
    desc: 'An intelligent trolley transforms the in-store experience with assisted shopping, personalised services, and greater convenience throughout the customer journey.',
    image: '/Images/Technology section/2 Assist .webp',
    caption: 'Concept visualisation — Interactive smart trolley navigation and checkout screen',
  },
  {
    id: 'phase-05',
    num: '05',
    name: 'Home Delivery',
    desc: 'Customers can continue their shopping journey beyond the store with convenient home delivery, creating a seamless connection between retail and everyday life.',
    image: null,
  },
  {
    id: 'phase-06',
    num: '06',
    name: 'Intelligent Product Discovery',
    desc: 'Customers can scan products to instantly access pricing, ingredients, nutritional information, origin, manufacturing details, and other insights to make informed purchasing decisions.',
    image: null,
  },
];

export default function Technology() {
  const [activePhase, setActivePhase] = useState(0);

  const scrollToPhase = (id: string, idx: number) => {
    setActivePhase(idx);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className={`band-navy ${styles.sectionTechnology}`} id="technology" aria-labelledby="technology-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.techIntroHeader}>
          <div className="section-meta">
            <span className="section-num">05</span>
            <span>Technology</span>
          </div>

          <h2 id="technology-heading" className={styles.techHeadline}>
            Building the Future of Retail, One Phase at a Time
          </h2>
          <p className={styles.techIntroBody}>
            Technology at BOGO is introduced through a phased roadmap, ensuring that every innovation enhances the customer experience while creating a smarter, more connected retail ecosystem.
          </p>
        </div>

        {/* Sticky Split Grid */}
        <div className={styles.stickySplitGrid} id="tech-split-grid">
          
          {/* Left Column: Sticky Index */}
          <aside className={styles.stickyIndexCol} aria-label="Technology Phases Navigation">
            <div className={styles.stickyTrackWrapper}>
              <div className={styles.timelineRail} aria-hidden="true">
                <div
                  className={styles.timelineProgressLine}
                  id="tech-timeline-line"
                  style={{ height: `${(activePhase / (TECH_PHASES.length - 1)) * 100}%` }}
                />
              </div>

              <ul className={styles.indexNavList}>
                {TECH_PHASES.map((phase, idx) => (
                  <li key={phase.id} className={styles.indexNavItem}>
                    <button
                      type="button"
                      className={`${styles.indexNavBtn} ${idx === activePhase ? styles.isActive : ''}`}
                      id={`tech-nav-btn-${idx}`}
                      onClick={() => scrollToPhase(phase.id, idx)}
                      aria-current={idx === activePhase ? 'true' : 'false'}
                    >
                      <span className={styles.indexNavNum}>{phase.num}</span>
                      <span className={styles.indexNavName}>{phase.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Column: Scrolling Phase Blocks */}
          <div className={styles.scrollContentCol} id="tech-scroll-content">
            {TECH_PHASES.map((phase, idx) => (
              <article
                key={phase.id}
                id={phase.id}
                data-phase-index={idx}
                className={styles.phaseBlock}
              >
                <div className={styles.phaseBlockHeader}>
                  <span className={styles.phaseStepNum}>Phase {phase.num}</span>
                  {/* Space reserved for future status tag */}
                  <span className={styles.statusSlot} aria-label="Status tag placeholder" />
                </div>

                <h3 className={styles.phaseTitle}>{phase.name}</h3>
                <p className={styles.phaseDescription}>{phase.desc}</p>

                {phase.image && (
                  <div className={styles.phaseMediaFrame}>
                    <Image
                      src={phase.image}
                      alt={`Concept visualisation for ${phase.name}`}
                      width={1920}
                      height={1080}
                      className={styles.phaseImg}
                      loading="lazy"
                      sizes="(max-width: 900px) 100vw, 65vw"
                    />
                  </div>
                )}
                {phase.caption && (
                  <span className="concept-caption">{phase.caption}</span>
                )}
              </article>
            ))}
          </div>

        </div>

        {/* Closing Statement */}
        <div className={styles.techClosingBlock} id="tech-closing">
          <h3 className={styles.techClosingHeading}>
            One connected customer journey.
          </h3>
          <p className={styles.techClosingSupporting}>
            From purchase history to intelligent discovery, each phase builds on the last, creating a retail experience that becomes smarter, simpler, and more connected over time.
          </p>
        </div>

      </div>
    </section>
  );
}
