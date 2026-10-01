import Image from 'next/image';
import styles from './Ecosystem.module.css';

const PILLARS = [
  {
    id: "formats",
    title: "Retail Formats",
    desc: "Scaled physical environments engineered for density, discovery, and community engagement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Tiered architectural pavilion footprint */}
        <rect x="2" y="7" width="11" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 11H13" stroke="rgba(250, 248, 245, 0.35)" strokeWidth="1.2" />
        <path d="M5.5 15V20" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 11H20C21.1046 11 22 11.8954 22 13V20H13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="16.5" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M1 7H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "brands",
    title: "Category Brands",
    desc: "Eleven specialized consumer brands curated for essential, wellness, and lifestyle needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Faceted isometric brand portfolio crystal */}
        <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 2V20" stroke="rgba(250, 248, 245, 0.35)" strokeWidth="1.2" />
        <path d="M12 11L20 6.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 11L4 6.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="11" r="2.5" fill="var(--accent-orange)" />
        <path d="M8 17.5L12 15L16 17.5" stroke="rgba(250, 248, 245, 0.6)" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    id: "supply",
    title: "Supply & Distribution",
    desc: "Direct farm-to-shelf sourcing, regional hubs, and unified omnichannel inventory.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Origin farm source */}
        <circle cx="5" cy="6" r="2.5" stroke="#4e8e3b" strokeWidth="1.5" fill="rgba(78, 142, 59, 0.25)" />
        {/* Regional central hub */}
        <rect x="15" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        {/* Shelf / store destination */}
        <circle cx="6" cy="18" r="2.5" stroke="var(--accent-orange)" strokeWidth="1.5" />
        {/* Interconnected transit vectors */}
        <path d="M7.5 6H13C14.1046 6 15 6.89543 15 8V10" stroke="rgba(250, 248, 245, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M18 16V17C18 18.1046 17.1046 19 16 19H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 7.5L15 12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    id: "tech",
    title: "Technology & Intelligence",
    desc: "Data-driven customer intelligence, smart store operations, and seamless digital commerce.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Central data processor */}
        <rect x="8" y="8" width="8" height="8" rx="2" stroke="var(--accent-orange)" strokeWidth="1.5" fill="rgba(247, 134, 52, 0.15)" />
        <circle cx="12" cy="12" r="1.5" fill="var(--accent-orange)" />
        {/* Bus traces */}
        <path d="M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Peripheral edge nodes */}
        <circle cx="4" cy="5" r="1.5" stroke="rgba(250, 248, 245, 0.5)" strokeWidth="1" />
        <circle cx="20" cy="5" r="1.5" stroke="rgba(250, 248, 245, 0.5)" strokeWidth="1" />
        <circle cx="4" cy="19" r="1.5" stroke="rgba(250, 248, 245, 0.5)" strokeWidth="1" />
        <circle cx="20" cy="19" r="1.5" stroke="rgba(250, 248, 245, 0.5)" strokeWidth="1" />
        <path d="M5.5 6L8 8" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1" />
        <path d="M18.5 6L16 8" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1" />
        <path d="M5.5 18L8 16" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1" />
        <path d="M18.5 18L16 16" stroke="rgba(250, 248, 245, 0.3)" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "services",
    title: "Programs & Services",
    desc: "Comprehensive ecosystem initiatives extending value across partner and consumer touchpoints.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Interlinked ecosystem loop with dual focal points */}
        <path d="M7.5 16C5.01472 16 3 13.9853 3 11.5C3 9.01472 5.01472 7 7.5 7C10.5 7 13.5 16 16.5 16C18.9853 16 21 13.9853 21 11.5C21 9.01472 18.9853 7 16.5 7C13.5 7 10.5 16 7.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="11.5" r="2" fill="var(--accent-orange)" />
        <circle cx="16.5" cy="11.5" r="2" fill="#4e8e3b" />
      </svg>
    )
  }
];

const RETAIL_FORMATS = [
  { name: 'Square', tag: 'Flagship', logo: '/Images/Logos/normalized/Square.png' },
  { name: 'Bazaar', tag: 'Community', logo: '/Images/Logos/normalized/Bazaar.png' },
  { name: 'Mini', tag: 'Everyday', logo: '/Images/Logos/normalized/Mini.png' },
];

const CATEGORY_BRANDS = [
  { name: 'Essentials', logo: '/Images/Logos/normalized/Essentials.png' },
  { name: 'Daily', logo: '/Images/Logos/normalized/Daily.png' },
  { name: 'Farms', logo: '/Images/Logos/normalized/Farms.png' },
  { name: 'Superfoods', logo: '/Images/Logos/normalized/Superfoods.png' },
  { name: 'Health', logo: '/Images/Logos/normalized/Health.png' },
  { name: 'Beauty', logo: '/Images/Logos/normalized/Beauty.png' },
  { name: 'Luxe', logo: '/Images/Logos/normalized/Luxe.png' },
  { name: 'Divine', logo: '/Images/Logos/normalized/Divine.png' },
  { name: 'Paws', logo: '/Images/Logos/normalized/Paws.png' },
  { name: 'Play', logo: '/Images/Logos/normalized/Play.png' },
  { name: 'Classroom', logo: '/Images/Logos/normalized/Classroom.png' },
];

const EXTENDED_SERVICES = [
  { name: 'BOGO Go', logo: '/Images/Logos/normalized/Go.png' },
  { name: 'BOGO Life', logo: '/Images/Logos/normalized/Life.png' },
  { name: 'BOGO Companion', logo: '/Images/Logos/normalized/Companion.png' },
  { name: 'BOGO Partner', logo: '/Images/Logos/normalized/Partner.png' },
  { name: 'BOGO Affairs', logo: '/Images/Logos/normalized/Affairs.png' },
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
            <div key={pillar.id} className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                {pillar.icon}
              </div>
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
                  src="/Images/Logos/normalized/Bogo.png"
                  alt="BOGO Ecosystem"
                  width={140}
                  height={60}
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
                <div className={styles.formatsNodeRow}>
                  {RETAIL_FORMATS.map((fmt) => (
                    <div key={fmt.name} className={styles.formatLogoNode} title={`BOGO ${fmt.name} (${fmt.tag})`}>
                      <Image
                        src={fmt.logo}
                        alt={`BOGO ${fmt.name}`}
                        width={90}
                        height={40}
                        className={styles.diagramLogoImg}
                      />
                      <span className={styles.formatNodeBadge}>{fmt.tag}</span>
                    </div>
                  ))}
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
                {CATEGORY_BRANDS.map((brand) => (
                  <div key={brand.name} className={styles.brandLogoTile} title={`BOGO ${brand.name}`}>
                    <Image
                      src={brand.logo}
                      alt={`BOGO ${brand.name}`}
                      width={100}
                      height={44}
                      className={styles.diagramLogoImg}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3: Programs & Services */}
            <div className={`${styles.diagramTier} ${styles.tier3}`}>
              <span className={styles.groupLabel}>Programs &amp; Extended Services</span>
              <div className={styles.servicesNodeRow}>
                {EXTENDED_SERVICES.map((service) => (
                  <div key={service.name} className={styles.serviceLogoTile} title={service.name}>
                    <Image
                      src={service.logo}
                      alt={service.name}
                      width={100}
                      height={44}
                      className={styles.diagramLogoImg}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
