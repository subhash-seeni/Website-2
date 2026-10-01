import Image from 'next/image';
import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';
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
            {navigationConfig.header.map((item) => {
              if (item.id === 'contact') {
                return (
                  <li key={item.id}>
                    <a href={item.href} className={styles.navCta}>
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <a href={item.href} className={styles.navLink}>
                    <span className={styles.navNum}>{item.num}</span> {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
