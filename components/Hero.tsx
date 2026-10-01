import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`band-light ${styles.sectionHero}`} id="hero" aria-label="Executive Introduction">
      <div className="container">
        
        {/* Executive Corporate Bar */}
        <div className={styles.heroExecutiveBar}>
          <div className={styles.heroCorporateBrand}>
            <Image
              src="/Images/Logos/Bogo.png"
              alt="BOGO"
              width={140}
              height={78}
              priority
              className={styles.heroLogo}
            />
            <span className={styles.corporateDivisionTag}>
              Institutional Overview
            </span>
          </div>
          <div className={styles.heroBriefingMeta}>
            <span className={styles.briefingTag}>Multi-Format Retail</span>
            <span className={styles.briefingTag}>Category Brands</span>
            <span className={styles.briefingTag}>Integrated Supply</span>
          </div>
        </div>

        {/* Two-Column Executive Split Layout */}
        <div className={styles.heroSplitGrid}>
          
          {/* Left Column: Strategic Thesis */}
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

          {/* Right Column: Architectural Flagship Display Frame */}
          <div className={styles.heroAssetCol}>
            <div className={styles.architecturalCard} id="hero-media">
              <div className={styles.cardHeaderBar}>
                <span className={styles.cardAssetLabel}>Flagship Asset</span>
                <span className={styles.cardAssetStatus}>BOGO Square</span>
              </div>

              <div className={styles.imageViewport}>
                <Image
                  src="/Images/Outlet images/Square.png"
                  alt="BOGO Square Flagship architectural rendering"
                  width={1672}
                  height={941}
                  priority
                  className={styles.flagshipImg}
                  sizes="(max-width: 960px) 100vw, 45vw"
                />
              </div>

              <div className={styles.cardFooterMeta}>
                <span className={styles.flagshipTitle}>Architectural Visualisation</span>
                <span className={styles.captionText}>Concept visualisation — BOGO Square Flagship</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
