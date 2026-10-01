import styles from './Closing.module.css';

export default function Closing() {
  return (
    <section className={`band-light ${styles.sectionClosing}`} id="closing" aria-labelledby="closing-title">
      <div className={`container ${styles.closingContainer}`}>
        
        <h2 id="closing-title" className={styles.closingStatement}>
          One vision. Endless possibilities.
        </h2>

        <div className={styles.closingActionBlock}>
          <p className={styles.closingSub}>
            Direct institutional and partnership inquiries to our executive office.
          </p>
          <a
            href="mailto:TODO?subject=Institutional%20Inquiry%20%E2%80%94%20BOGO%20Ecosystem"
            className={`btn-primary ${styles.closingBtn}`}
          >
            Get in touch
          </a>
          <span className={styles.contactMeta}>
            Contact: [TODO: Official Contact Email]
          </span>
        </div>

      </div>
    </section>
  );
}
