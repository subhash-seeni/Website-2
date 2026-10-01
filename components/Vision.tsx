import styles from './Vision.module.css';

export default function Vision() {
  const statement = "Building India's Next Retail Ecosystem.";
  const words = statement.split(" ");

  return (
    <section className={`band-navy ${styles.sectionVision}`} id="vision" aria-labelledby="vision-title">
      <div className={`container ${styles.visionContainer}`}>
        
        <div className="section-meta">
          <span className="section-num">01</span>
          <span>Vision</span>
        </div>

        <div className={styles.visionContent}>
          <h2 id="vision-title" className={styles.visionStatement} aria-label={statement}>
            {words.map((word, idx) => (
              <span key={idx} className={styles.visionWord}>
                {word}{' '}
              </span>
            ))}
          </h2>
          
          <div className={`${styles.visionDivider} hairline-dark`} aria-hidden="true" />

          <p className={styles.visionSupporting}>
            Where brands, technology and experiences come together.
          </p>
        </div>

      </div>
    </section>
  );
}
