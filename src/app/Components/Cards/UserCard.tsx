import React, { useState } from 'react'
import styles from './UserCard.module.scss';
import { IFUserData } from '@/app/SearchResult/page';
import profileImage from '@/../public/girlImage.svg'
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import ModelLayout from '../Model/ModelLayout';

interface ComponentProps {
    userCard: IFUserData
}

const UserCard: React.FC<ComponentProps> = ({ userCard }) => {
    const [isDetailsModelOpen, setIsDetailsModelIOpen] = useState<boolean>(false);


    return (
        <>
            <div className={styles.container} key={userCard._id}>
                <div className={styles.profile}>

                    <Image src={profileImage} height={70} width={70} alt="Profile" className={styles.profileImage} />
                    <h1 className={styles.name}>{`${userCard.first_name} ${userCard.last_name}`}</h1>
                    <div className={styles.location}>
                        <FaLocationDot />
                        <span>{userCard.city}</span>
                    </div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.contactInfo}>
                        <div>
                            <IoCall />
                            <div className={styles.phoneNumber}>{userCard.contact_number}</div>
                        </div>
                        <div className={styles.status}>Available on phone</div>
                    </div>
                    <button className={styles.fetchButton} onClick={e => setIsDetailsModelIOpen(true)}>Fetch Details</button>
                </div>
            </div>
            {isDetailsModelOpen && <ModelLayout isOpen={isDetailsModelOpen} onClose={setIsDetailsModelIOpen}>
                <div className={styles.maindiv}>
                    <h1 className={styles.topheading}>Fetch Details</h1>
                    <p className={styles.secondryText}>Here are the details of following employee.</p>
                    <br />
                    <br />
                    <p className={styles.userDetails}>Name : {`${userCard.first_name} ${userCard.last_name}`}</p>
                    <p className={styles.userDetails}>Location :{userCard.city}</p>
                    <p className={styles.userDetails}>Contact Number : {userCard.contact_number}</p>
                    <br />
                    <p className={styles.userDetails}>Profile Image: :</p>

                    <Image src={profileImage} height={70} width={70} alt="Profile" />

                </div>
            </ModelLayout>}
        </>
    )
}

export default UserCard