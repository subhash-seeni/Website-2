import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`band-light ${styles.sectionHero}`} id="hero" aria-label="Introduction">
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.heroTextBlock}>
          <div className={styles.heroBrandMark}>
            <Image
              src="/Images/Logos/Bogo.png"
              alt="BOGO Ecosystem"
              width={160}
              height={90}
              priority
              className={styles.heroLogo}
            />
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

        <div className={styles.heroMediaWrap} id="hero-media">
          <div className={styles.heroImageFrame}>
            <Image
              src="/Images/Outlet images/Square.png"
              alt="BOGO Square Flagship architectural rendering"
              width={1672}
              height={941}
              priority
              className={styles.heroImage}
              sizes="(max-width: 1240px) 100vw, 1240px"
            />
          </div>
          <span className="concept-caption">Concept visualisation — BOGO Square Flagship</span>
        </div>

      </div>
    </section>
  );
}
