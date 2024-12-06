'use client';


import Header from '@/app/Components/Header/Header';
import React, { useState } from 'react';
import classes from './Homepage.module.scss';
import Image from 'next/image';
import banner from '../../../public/banner-img.svg';
import search from '../../../public/search.svg';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState<string>('');


    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchInput) {
            router.push(`/SearchResult?searchkey=${searchInput}`);
        }
    };

    return (
        <>
            <Header />
            <div className={classes.homePageMain}>
                <div className={classes.contentContainer}>
                    <div className={classes.logo}>
                        <Image src={banner} alt="Logo" />
                    </div>
                    <form onSubmit={handleSearch}>
                        <div className={classes.searchBar}>
                            <Image src={search} alt="Logo" />
                            <input
                                type="text"
                                className={classes.searchInput}
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                placeholder="Search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HomePage;
