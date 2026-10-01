import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`band-light ${styles.sectionHero}`} id="hero" aria-label="Executive Introduction">
      <div className="container">
        
        {/* Two-Column Executive Split Layout */}
        <div className={styles.heroSplitGrid}>
          
          {/* Left Column: Strategic Narrative */}
          <div className={styles.heroContentCol}>
            <div>
              <div className={styles.heroEyebrowTag}>
                <span className={styles.eyebrowDot} />
                <span>Strategic Narrative</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Building India&apos;s Next Retail Ecosystem.
              </h1>

              <p className={styles.heroSubline}>
                Where brands, technology and experiences come together.
              </p>

              <div className={styles.heroActions}>
                <a href="#vision" className="btn-primary">
                  Our vision
                </a>
                <a href="#closing" className="btn-secondary">
                  Get in touch
                </a>
              </div>
            </div>

            {/* Institutional Ledger Strip */}
            <div className={styles.heroLedger}>
              <div className={styles.ledgerItem}>
                <span className={styles.ledgerNum}>01</span>
                <span className={styles.ledgerLabel}>Three Formats</span>
                <span className={styles.ledgerDetail}>Square, Bazaar &amp; Mini</span>
              </div>
              <div className={styles.ledgerItem}>
                <span className={styles.ledgerNum}>02</span>
                <span className={styles.ledgerLabel}>Eleven Brands</span>
                <span className={styles.ledgerDetail}>Dedicated Categories</span>
              </div>
              <div className={styles.ledgerItem}>
                <span className={styles.ledgerNum}>03</span>
                <span className={styles.ledgerLabel}>Proprietary Tech</span>
                <span className={styles.ledgerDetail}>Connected Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Architectural Geometric Pattern */}
          <div className={styles.heroPatternCol} id="hero-media">
            <div className={styles.patternContainer} aria-hidden="true">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.patternSvg}
              >
                {/* Outer Isometric Hexagonal Boundary */}
                <polygon
                  points="200,30 350,115 350,285 200,370 50,285 50,115"
                  stroke="rgba(14, 41, 78, 0.18)"
                  strokeWidth="1.2"
                />

                {/* Inner Hexagonal Ring */}
                <polygon
                  points="200,80 305,140 305,260 200,320 95,260 95,140"
                  stroke="rgba(14, 41, 78, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />

                {/* Center Core Hexagon */}
                <polygon
                  points="200,140 252,170 252,230 200,260 148,230 148,170"
                  stroke="rgba(14, 41, 78, 0.22)"
                  strokeWidth="1.5"
                />

                {/* Radial Geometric Connecting Axes */}
                <line x1="200" y1="30" x2="200" y2="370" stroke="rgba(14, 41, 78, 0.15)" strokeWidth="1" />
                <line x1="50" y1="115" x2="350" y2="285" stroke="rgba(14, 41, 78, 0.15)" strokeWidth="1" />
                <line x1="50" y1="285" x2="350" y2="115" stroke="rgba(14, 41, 78, 0.15)" strokeWidth="1" />

                {/* Isometric Facet Connectors */}
                <line x1="200" y1="80" x2="252" y2="170" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />
                <line x1="305" y1="140" x2="252" y2="230" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />
                <line x1="305" y1="260" x2="200" y2="260" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />
                <line x1="200" y1="320" x2="148" y2="230" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />
                <line x1="95" y1="260" x2="148" y2="170" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />
                <line x1="95" y1="140" x2="200" y2="140" stroke="rgba(14, 41, 78, 0.12)" strokeWidth="1" />

                {/* Concentric Guide Arcs */}
                <circle cx="200" cy="200" r="170" stroke="rgba(14, 41, 78, 0.08)" strokeWidth="1" />
                <circle cx="200" cy="200" r="115" stroke="rgba(14, 41, 78, 0.08)" strokeWidth="1" />

                {/* Strategic Brand Accent Nodes */}
                <circle cx="200" cy="30" r="3.5" fill="#f78634" />
                <circle cx="350" cy="115" r="3.5" fill="#4e8e3b" />
                <circle cx="350" cy="285" r="3" fill="#0e294e" />
                <circle cx="200" cy="370" r="3.5" fill="#f78634" />
                <circle cx="50" cy="285" r="3.5" fill="#4e8e3b" />
                <circle cx="50" cy="115" r="3" fill="#0e294e" />
                <circle cx="200" cy="200" r="4.5" fill="#0e294e" />
              </svg>

              <div className={styles.patternLabelBlock}>
                <span className={styles.patternTag}>Ecosystem Framework</span>
                <span className={styles.patternSub}>Multi-Format Matrix</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
