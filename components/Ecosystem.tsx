import Image from 'next/image';
import styles from './Ecosystem.module.css';

const PILLARS = [
  {
    num: "01",
    title: "Retail Formats",
    desc: "Scaled physical environments engineered for density, discovery, and community engagement."
  },
  {
    num: "02",
    title: "Category Brands",
    desc: "Eleven specialized consumer brands curated for essential, wellness, and lifestyle needs."
  },
  {
    num: "03",
    title: "Supply & Distribution",
    desc: "Direct farm-to-shelf sourcing, regional hubs, and unified omnichannel inventory."
  },
  {
    num: "04",
    title: "Technology & Intelligence",
    desc: "Data-driven customer intelligence, smart store operations, and seamless digital commerce."
  },
  {
    num: "05",
    title: "Programs & Services",
    desc: "Comprehensive ecosystem initiatives extending value across partner and consumer touchpoints."
  }
];

export default function Ecosystem() {
  return (
    <section className={`band-navy ${styles.sectionEcosystem}`} id="ecosystem" aria-labelledby="ecosystem-title">
      <div className="container">
        
        <div className="section-meta">
          <span className="section-num">01</span>
          <span>Ecosystem</span>
        </div>

        <div className={styles.ecosystemHeader}>
          <h2 id="ecosystem-title" className={styles.ecosystemTitle}>
            Integrated Architecture
          </h2>
          <p className={styles.ecosystemSubtitle}>
            A cohesive retail infrastructure uniting physical footprint, category depth, and proprietary technology.
          </p>
        </div>

        {/* Five Strategic Pillars */}
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className={styles.pillarCard}>
              <span className={styles.pillarNum}>{pillar.num}</span>
              <h3 className={styles.pillarName}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <hr className={`hairline-dark ${styles.ecosystemHairline}`} aria-hidden="true" />

        {/* Signature Diagram: Architectural Hierarchy on Navy */}
        <div className={styles.diagramWrapper} aria-label="Ecosystem Structural Diagram">
          <div className={styles.diagramHeader}>
            <span className={styles.diagramTag}>Structure Diagram</span>
            <span className={styles.diagramNote}>Authoritative Framework</span>
          </div>

          <div className={styles.diagramCanvas}>
            
            {/* Tier 0: Root */}
            <div className={`${styles.diagramNode} ${styles.nodeRoot}`}>
              <div className={`${styles.nodeBox} ${styles.rootBox}`}>
                <Image
                  src="/Images/Logos/Bogo.png"
                  alt="BOGO Ecosystem"
                  width={120}
                  height={68}
                  className={styles.rootLogo}
                />
                <span className={styles.nodeCaption}>Core Ecosystem</span>
              </div>
            </div>

            {/* SVG Connecting Vectors Tier 0 -> Tier 1 */}
            <svg className={styles.diagramLines} viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid meet">
              <path className={`${styles.diagramVector} v-trunk`} d="M 500,45 L 500,95" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
              <path className={`${styles.diagramVector} v-branch-t1`} d="M 280,95 L 720,95" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
              <path className={`${styles.diagramVector} v-t1-left`} d="M 280,95 L 280,135" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
              <path className={`${styles.diagramVector} v-t1-right`} d="M 720,95 L 720,135" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />

              <path className={`${styles.diagramVector} v-trunk-t2`} d="M 500,95 L 500,240" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
              <path className={`${styles.diagramVector} v-branch-t2`} d="M 120,240 L 880,240" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />

              <path className={`${styles.diagramVector} v-trunk-t3`} d="M 500,380 L 500,440" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
              <path className={`${styles.diagramVector} v-branch-t3`} d="M 200,440 L 800,440" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1.5" />
            </svg>

            {/* Tier 1: Retail Formats & Supply */}
            <div className={`${styles.diagramTier} ${styles.tier1}`}>
              <div className={`${styles.nodeGroup} ${styles.groupFormats}`}>
                <span className={styles.groupLabel}>Retail Formats</span>
                <div className={styles.subnodesRow}>
                  <span className={styles.subnodePill}>Square (Flagship)</span>
                  <span className={styles.subnodePill}>Bazaar (Community)</span>
                  <span className={styles.subnodePill}>Mini (Everyday)</span>
                </div>
              </div>
              <div className={`${styles.nodeGroup} ${styles.groupSupply}`}>
                <span className={styles.groupLabel}>Supply &amp; Distribution</span>
                <div className={styles.subnodesRow}>
                  <span className={styles.subnodePill}>Direct Sourcing</span>
                  <span className={styles.subnodePill}>Unified Logistics</span>
                </div>
              </div>
            </div>

            {/* Tier 2: 11 Category Brands */}
            <div className={`${styles.diagramTier} ${styles.tier2}`}>
              <span className={styles.groupLabel}>Eleven Category Verticals</span>
              <div className={styles.brandsNodeMatrix}>
                {['Essentials', 'Daily', 'Farms', 'Superfoods', 'Health', 'Beauty', 'Luxe', 'Divine', 'Paws', 'Play', 'Classroom'].map((brand) => (
                  <span key={brand} className={styles.brandLeafNode}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Tier 3: Programs & Services */}
            <div className={`${styles.diagramTier} ${styles.tier3}`}>
              <span className={styles.groupLabel}>Programs &amp; Extended Services</span>
              <div className={styles.servicesNodeRow}>
                {['BOGO Go', 'BOGO Life', 'BOGO Companion', 'BOGO Partner', 'BOGO Affairs'].map((service) => (
                  <span key={service} className={styles.serviceLeafNode}>
                    {service}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
