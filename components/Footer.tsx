import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`band-light ${styles.siteFooter}`} role="contentinfo">
      <div className="container">
        
        <div className={styles.footerTopRow}>
          <div className={styles.footerBrand}>
            <Image
              src="/Images/Logos/Bogo.png"
              alt="BOGO"
              width={100}
              height={56}
              className={styles.footerLogo}
            />
            <span className={styles.footerCorporateText}>
              Building India&apos;s Next Retail Ecosystem.
            </span>
          </div>

          <div>
            <span className={styles.footerHeading}>Ecosystem</span>
            <ul className={styles.footerLinks}>
              <li><a href="#ecosystem" className={styles.footerLink}>01 Ecosystem</a></li>
              <li><a href="#brands" className={styles.footerLink}>02 Category Brands</a></li>
              <li><a href="#formats" className={styles.footerLink}>03 Retail Formats</a></li>
              <li><a href="#technology" className={styles.footerLink}>04 Technology</a></li>
              <li><a href="#roadmap" className={styles.footerLink}>05 Strategic Roadmap</a></li>
            </ul>
          </div>

          <div>
            <span className={styles.footerHeading}>Inquiries</span>
            <p className={styles.footerContactText}>
              Direct institutional queries:
            </p>
            <a href="mailto:TODO" className={styles.footerEmailLink}>
              [TODO: Official Contact Email]
            </a>
          </div>
        </div>

        <hr className={`hairline-light ${styles.footerHairline}`} aria-hidden="true" />

        <div className={styles.footerBottomRow}>
          <p className={styles.footerLegal}>
            &copy; {new Date().getFullYear()} BOGO. All rights reserved.
          </p>
          <p className={styles.footerDisclaimer}>
            Images are illustrative concept visualisations.
          </p>
        </div>

      </div>
    </footer>
  );
}
