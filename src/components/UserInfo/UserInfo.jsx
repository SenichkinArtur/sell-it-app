import React from 'react';

import styles from './UserInfo.module.css';
import userPhotoDefault from '../../assets/images/user-photo.jpg';


const UserInfo = ({ user }) => {

    return (
        <div className="flex-grow">
            <div className="container">
                <div className="row">
                    <div className={styles.user_page}>
                        <img src={user.avatar || userPhotoDefault} alt="" className={styles.user_page_image}/>
                        <div className={styles.user_page_info}>
                            <p>User Name: <span>{user.username}</span></p>
                            <p>User ID: <span>{user.user_id}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
