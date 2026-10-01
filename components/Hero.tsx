import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`band-light ${styles.sectionHero}`} id="hero" aria-label="Executive Introduction">
      {/* Ambient background decoration */}
      <div className={styles.heroAmbientBackdrop} aria-hidden="true">
        <Image
          src="/Images/Hero background.svg"
          alt=""
          fill
          priority
          className={styles.ambientSvg}
        />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        
        {/* Two-Column Executive Split Layout */}
        <div className={styles.heroSplitGrid}>
          
          {/* Left Column: Strategic Narrative */}
          <div className={styles.heroContentCol}>
            <div>
              <div className={styles.heroEyebrowTag}>
                <span className={styles.eyebrowDot} />
                <span>One Connected Vision</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Building India&apos;s Next Retail Ecosystem.
              </h1>

              <p className={styles.heroSubline}>
                Where brands, technology and experiences come together.
              </p>

              <div className={styles.heroActions}>
                <a href="#ecosystem" className="btn-primary">
                  Our ecosystem
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

          {/* Right Column: Hero Banner SVG with Decent Floating Effect */}
          <div className={styles.heroGraphicCol} id="hero-media">
            <div className={styles.heroVisualFrame}>
              <div className={styles.visualGlow} aria-hidden="true" />
              <div className={styles.visualCanvas}>
                <Image
                  src="/Images/Hero background.svg"
                  alt="BOGO Retail Architecture Vision"
                  width={864}
                  height={576}
                  priority
                  className={styles.heroBannerSvg}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
