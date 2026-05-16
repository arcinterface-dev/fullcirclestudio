'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandName } from '@/components/ui/BrandName';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' },
];

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHomePage = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header nav/actions are only visible on Home Page at the very top (banner section)
  const showFullMenu = isHomePage && !isScrolled;

  return (
    <header className={styles.header}>
      <div className={styles.fluidHeader}>
        <div className={styles.brand}>
          <Link href="/">
            <BrandName withShadow={isHomePage && !isScrolled} />
          </Link>
        </div>

        <nav className={`${styles.nav} ${!showFullMenu ? styles.isHidden : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`${styles.actions} ${!showFullMenu ? styles.isHidden : ''}`}>
          <Link href="/contact" className={styles.actionButton}>
            GET YOUR QUOTE <span className={styles.arrow}>&gt;</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
