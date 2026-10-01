import Image from 'next/image';
import styles from './Formats.module.css';

const FORMATS = [
  {
    id: 'square',
    name: 'Square',
    tagline: 'Where the BOGO ecosystem comes to life. (Flagship)',
    logo: '/Images/Logos/normalized/Square.png',
    image: '/Images/Outlet images/Square.png',
    caption: 'Concept visualisation — BOGO Square Flagship Destination',
  },
  {
    id: 'bazaar',
    name: 'Bazaar',
    tagline: 'The complete shopping destination. (4,000–6,000 sq. ft.)',
    logo: '/Images/Logos/normalized/Bazaar.png',
    image: '/Images/Outlet images/Bazaar.png',
    caption: 'Concept visualisation — BOGO Bazaar Community Hub',
  },
  {
    id: 'mini',
    name: 'Mini',
    tagline: 'Quick visits. Everyday essentials. Closer to customers. (Around 2,000 sq. ft.)',
    logo: '/Images/Logos/normalized/Mini.png',
    image: '/Images/Outlet images/Mini.png',
    caption: 'Concept visualisation — BOGO Mini Neighborhood Store',
  },
];

export default function Formats() {
  return (
    <section className={`band-light ${styles.sectionFormats}`} id="formats" aria-labelledby="formats-title">
      <div className="container">
        
        <div className="section-meta">
          <span className="section-num">03</span>
          <span>Formats</span>
        </div>

        <div className={styles.formatsIntro}>
          <h2 id="formats-title" className={styles.formatsTitle}>
            Physical Retail Formats
          </h2>
          <p className={styles.formatsSubtitle}>
            Three tiered format models scaled for destination shopping, dense community catchments, and rapid neighborhood visits.
          </p>
        </div>

        <div className={styles.formatsGrid}>
          {FORMATS.map((fmt) => (
            <article key={fmt.id} className={styles.formatColumn}>
              <div className={styles.formatImageFrame}>
                <Image
                  src={fmt.image}
                  alt={`BOGO ${fmt.name} architectural render`}
                  width={1920}
                  height={1080}
                  className={styles.formatRenderImg}
                  loading="lazy"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <span className="concept-caption">{fmt.caption}</span>

              <div className={styles.formatMetaBlock}>
                <div className={styles.formatLogoWrap}>
                  <Image
                    src={fmt.logo}
                    alt={`BOGO ${fmt.name} logo`}
                    width={180}
                    height={101}
                    className={styles.formatLogoImg}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.formatCardName}>{fmt.name}</h3>
                <p className={styles.formatCardDesc}>{fmt.tagline}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
