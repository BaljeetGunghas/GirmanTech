'use client';

import React, { useEffect, useState } from 'react';
import classes from './SearchResult.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import SearchHeader from '../Components/Header/SearchHeader';
import UserCard from '../Components/Cards/UserCard';
import noresultimage from '@/../public/noresult.svg';
import { useRouter } from 'next/navigation';
import search from '@/../public/search.svg';
import LoadingModel from '../Components/Model/LoadingModel';


export interface IFUserData {
    _id: string,
    first_name: string,
    last_name: string,
    city: string,
    contact_number: string
}

const SearchResult = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const [searchInput, setSearchInput] = useState<string>('');
    const [userData, setUserData] = useState<IFUserData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const getSearchData = async (searchkey: string) => {
        setLoading(true);
        if (!searchkey) {
            setLoading(false);
            return;
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}data/get-user-list`, {
                searchString: searchkey,
            });

            const responseData = response.data;
            if (responseData.output > 0) {
                setUserData(responseData.jsonResponse)
            }

        } catch (error) {
            console.error('Error fetching search data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        const key = searchParams.toString();
        const keyvalue = key?.split("=")[1]
        if (key && keyvalue) {
            setSearchInput(keyvalue)
            getSearchData(keyvalue);
        }

    }, [searchParams]);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchInput) {
            router.replace(`/SearchResult?searchkey=${searchInput}`, undefined);
            setUserData([])
            getSearchData(searchInput);

        }
    }

    return (
        <>
            <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} handlesubmit={handleSearch} />
            <div className={classes.homePageMain}>
                <div className={classes.contentContainer}>

                    {/* <nav className={classes.nav}> */}
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
                    {/* </nav> */}

                    {userData && userData?.length > 0 ?
                        userData?.map((user: IFUserData) => {
                            return (
                                <UserCard userCard={user} key={user._id} />

                            )
                        })
                        : (
                            <>
                                <div className={classes.NoResultSec}>
                                    <Image alt='noresult' src={noresultimage} />
                                    <p className={classes.noresultText}>No results found.</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            {loading && <LoadingModel isOpen={loading} onClose={setLoading} />}
        </>
    );
};

export default SearchResult;
