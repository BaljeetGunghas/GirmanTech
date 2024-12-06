// components/Header.tsx

'use client';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/Logo.svg';
import search from '@/../public/search.svg';
import { usePathname } from 'next/navigation';
import menu from '@/../public/menu.svg';

interface Components {
    searchInput: string;
    setSearchInput: (val: string) => void;
    handlesubmit: (event: React.FormEvent) => void;
}

const SearchHeader: React.FC<Components> = ({ searchInput, setSearchInput, handlesubmit }) => {
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
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt='logo' />
                </Link>
            </div>

             {/* Hamburger Button */}
             <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                    <Image src={menu} alt="menu" />
               
            </button>

            {/* Navigation Links */}
            <nav className={`${styles.nav} ${!isMenuOpen ? styles.close : styles.open}`}>
                <Link href="/" className={`${styles.link} ${isActive('/SearchResult')}`} onClick={() => setIsMenuOpen(false)}>
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

            {/* Right Links */}
            <nav className={styles.nav}>
                <form onSubmit={handlesubmit}>
                    <div className={styles.searchBar}>
                        <Image src={search} alt="Logo" />
                        <input
                            type="text"
                            className={styles.searchInput}
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            placeholder="Search"
                        />
                    </div>
                </form>
            </nav>
        </header>
    );
};

export default SearchHeader;
