import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.siteHeader} role="banner">
      <div className={`container ${styles.headerContainer}`}>
        <Link href="#hero" className={styles.headerLogoLink} aria-label="BOGO Homepage">
          <Image
            src="/Images/Logos/Bogo.png"
            alt="BOGO"
            width={140}
            height={78}
            priority
            className={styles.headerLogo}
          />
        </Link>
        <nav aria-label="Investor Navigation">
          <ul className={styles.navList}>
            <li><a href="#ecosystem" className={styles.navLink}><span className={styles.navNum}>01</span> Ecosystem</a></li>
            <li><a href="#brands" className={styles.navLink}><span className={styles.navNum}>02</span> Brands</a></li>
            <li><a href="#formats" className={styles.navLink}><span className={styles.navNum}>03</span> Formats</a></li>
            <li><a href="#technology" className={styles.navLink}><span className={styles.navNum}>04</span> Technology</a></li>
            <li><a href="#roadmap" className={styles.navLink}><span className={styles.navNum}>05</span> Roadmap</a></li>
            <li><a href="#closing" className={styles.navCta}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
