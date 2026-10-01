import Image from 'next/image';
import styles from './Ecosystem.module.css';

const PILLARS = [
  {
    id: "formats",
    title: "Retail Formats",
    desc: "Scaled physical environments engineered for density, discovery, and community engagement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Modern store canopy & facade */}
        <rect x="3" y="10" width="26" height="18" rx="2" stroke="#0e294e" strokeWidth="2" fill="rgba(14, 41, 78, 0.04)" />
        <path d="M2 10L16 3L30 10" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Retail entrance portal */}
        <path d="M12 28V17H20V28" stroke="#f78634" strokeWidth="2" strokeLinejoin="round" fill="rgba(247, 134, 52, 0.12)" />
        {/* Large format window columns */}
        <line x1="7" y1="15" x2="7" y2="23" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <line x1="25" y1="15" x2="25" y2="23" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        {/* Brand identity emblem on pediment */}
        <circle cx="16" cy="7.5" r="1.5" fill="#f78634" />
      </svg>
    )
  },
  {
    id: "brands",
    title: "Category Brands",
    desc: "Eleven specialized consumer brands curated for essential, wellness, and lifestyle needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Four interlocking category brand facets */}
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="#0e294e" strokeWidth="2" fill="rgba(14, 41, 78, 0.05)" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="#f78634" strokeWidth="2" fill="rgba(247, 134, 52, 0.15)" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="#4e8e3b" strokeWidth="2" fill="rgba(78, 142, 59, 0.15)" />
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="#0e294e" strokeWidth="2" fill="rgba(14, 41, 78, 0.05)" />
        {/* Central connecting core */}
        <circle cx="16" cy="16" r="3" fill="#f78634" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: "supply",
    title: "Supply & Distribution",
    desc: "Direct farm-to-shelf sourcing, regional hubs, and unified omnichannel inventory.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Origin farm / source node (green) */}
        <circle cx="6" cy="8" r="4" stroke="#4e8e3b" strokeWidth="2" fill="rgba(78, 142, 59, 0.2)" />
        <circle cx="6" cy="8" r="1.5" fill="#4e8e3b" />
        {/* Central regional distribution hub (navy) */}
        <rect x="20" y="4" width="8" height="8" rx="1.5" stroke="#0e294e" strokeWidth="2" fill="rgba(14, 41, 78, 0.1)" />
        {/* Destination retail shelf node (orange) */}
        <circle cx="16" cy="24" r="4" stroke="#f78634" strokeWidth="2" fill="rgba(247, 134, 52, 0.2)" />
        <circle cx="16" cy="24" r="1.5" fill="#f78634" />
        {/* Interconnected transit vectors */}
        <path d="M10 8H16C18.2091 8 20 9.79086 20 12V12" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 12V18C24 20.2091 22.2091 22 20 22H20" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 11L14 20" stroke="#f78634" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    )
  },
  {
    id: "tech",
    title: "Technology & Intelligence",
    desc: "Data-driven customer intelligence, smart store operations, and seamless digital commerce.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Central intelligence processor */}
        <rect x="9" y="9" width="14" height="14" rx="2.5" stroke="#0e294e" strokeWidth="2" fill="rgba(14, 41, 78, 0.08)" />
        {/* Core intelligence glowing pulse */}
        <rect x="13" y="13" width="6" height="6" rx="1" fill="#f78634" />
        {/* Circuit bus traces radiating out */}
        <path d="M16 2V9" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 23V30" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 16H9" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 16H30" stroke="#0e294e" strokeWidth="2" strokeLinecap="round" />
        {/* Active corner sensor terminals */}
        <circle cx="5" cy="5" r="2" fill="#f78634" />
        <circle cx="27" cy="5" r="2" fill="#4e8e3b" />
        <circle cx="5" cy="27" r="2" fill="#4e8e3b" />
        <circle cx="27" cy="27" r="2" fill="#f78634" />
      </svg>
    )
  },
  {
    id: "services",
    title: "Programs & Services",
    desc: "Comprehensive ecosystem initiatives extending value across partner and consumer touchpoints.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Interconnected infinity value loop */}
        <path d="M9.5 21C6.46243 21 4 18.5376 4 15.5C4 12.4624 6.46243 10 9.5 10C13.5 10 18.5 21 22.5 21C25.5376 21 28 18.5376 28 15.5C28 12.4624 25.5376 10 22.5 10C18.5 10 13.5 21 9.5 21Z" stroke="#0e294e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Partner touchpoint node */}
        <circle cx="9.5" cy="15.5" r="3.5" fill="#f78634" stroke="#ffffff" strokeWidth="1.5" />
        {/* Consumer touchpoint node */}
        <circle cx="22.5" cy="15.5" r="3.5" fill="#4e8e3b" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    )
  }
];

const RETAIL_FORMATS = [
  { name: 'Square', logo: '/Images/Logos/normalized/Square.png' },
  { name: 'Bazaar', logo: '/Images/Logos/normalized/Bazaar.png' },
  { name: 'Mini', logo: '/Images/Logos/normalized/Mini.png' },
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
                  width={150}
                  height={54}
                  className={styles.rootLogo}
                />
                <span className={styles.nodeCaption}>Core Ecosystem</span>
              </div>
            </div>

            {/* Tree Branch: Root to Tier 1 */}
            <div className={styles.branchRootToTier1} aria-hidden="true">
              <div className={styles.stemRootDown} />
              <div className={styles.crossbarTier1} />
              <div className={styles.stemsTier1Down}>
                <div className={styles.stemCol} />
                <div className={styles.stemCol} />
              </div>
            </div>

            {/* Tier 1: Retail Formats & Supply */}
            <div className={`${styles.diagramTier} ${styles.tier1}`}>
              <div className={`${styles.nodeGroup} ${styles.groupFormats}`}>
                <span className={styles.groupLabel}>Retail Formats</span>
                <div className={styles.formatsNodeRow}>
                  {RETAIL_FORMATS.map((fmt) => (
                    <div key={fmt.name} className={styles.formatLogoNode} title={`BOGO ${fmt.name}`}>
                      <Image
                        src={fmt.logo}
                        alt={`BOGO ${fmt.name}`}
                        width={140}
                        height={56}
                        className={styles.diagramLogoImg}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.nodeGroup} ${styles.groupSupply}`}>
                <span className={styles.groupLabel}>Supply &amp; Distribution</span>
                <div className={styles.supplyNodeRow}>
                  <div className={styles.formatLogoNode} title="BOGO Go">
                    <Image
                      src="/Images/Logos/normalized/Go.png"
                      alt="BOGO Go"
                      width={140}
                      height={56}
                      className={styles.diagramLogoImg}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Connector: Tier 1 to Tier 2 */}
            <div className={styles.tierConnector} aria-hidden="true">
              <div className={styles.verticalStem} />
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
                      width={140}
                      height={56}
                      className={styles.diagramLogoImg}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Connector: Tier 2 to Tier 3 */}
            <div className={styles.tierConnector} aria-hidden="true">
              <div className={styles.verticalStem} />
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
                      width={140}
                      height={56}
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
