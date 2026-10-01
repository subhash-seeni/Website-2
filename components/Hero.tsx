import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`band-light ${styles.sectionHero}`} id="hero" aria-label="Executive Introduction">
      {/* Full-bleed Hero Background SVG */}
      <div className={styles.heroBackgroundWrap} id="hero-bg" aria-hidden="true">
        <Image
          src="/Images/Hero background.svg"
          alt=""
          fill
          priority
          className={styles.heroBackgroundImage}
        />
        <div className={styles.heroOverlayFade} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
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
      </div>
    </section>
  );
}
