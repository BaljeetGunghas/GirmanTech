// components/Header.tsx

'use client';
import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/Logo.svg';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {

    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? styles.active : '';
    };

    return (
        <header className={styles.header}>
            {/* Left Logo */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt='logo' />
                </Link>
            </div>

            {/* Right Links */}
            <nav className={styles.nav}>
                <Link href="/" className={`${styles.link} ${isActive('/')}`}>
                    Search
                </Link>
                <Link className={styles.link} href="https://www.website.com" target="_blank">
                    Website
                </Link>
                <Link className={styles.link} href="https://www.linkedin.com" target="_blank">
                    LinkedIn
                </Link>
                <Link className={styles.link} href="/contact">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
