'use client';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/Logo.svg';
import menu from '@/../public/menu.svg';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? styles.active : '';
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            {/* Left Logo */}
            <Link href="/">
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" />
                </div>
            </Link>

            {/* Hamburger Button */}
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                    <Image src={menu} alt="menu" />
               
            </button>

            {/* Navigation Links */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/" className={`${styles.link} ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
               
                    Search
                </Link>
                <Link className={styles.link} href="https://girmantech.com/" target="_blank" onClick={() => setIsMenuOpen(false)}>
                    Website
                </Link>
                <Link className={styles.link} href="https://www.linkedin.com/company/girmantech/" target="_blank" onClick={() => setIsMenuOpen(false)}>
                    LinkedIn
                </Link>
                <Link className={styles.link} href="mailto:contact@girmantech.com" onClick={() => setIsMenuOpen(false)}>
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
