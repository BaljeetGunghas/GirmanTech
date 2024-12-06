// components/Header.tsx

'use client';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/Logo.svg';
import search from '@/../public/search.svg';

interface Components {
    searchInput: string;
    setSearchInput: (val: string) => void;
    handlesubmit: (event: React.FormEvent) => void;
}

const SearchHeader: React.FC<Components> = ({ searchInput, setSearchInput, handlesubmit }) => {


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
