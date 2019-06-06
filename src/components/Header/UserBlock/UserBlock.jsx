import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserBlock.module.css';
import userPhotoDefault from '../../../assets/images/user-photo.jpg';
import logoutIcon from '../../../assets/images/logout-icon.png';

const UserBlock = ({ isLogin, userInfo, userLogout }) => {
    return (
        <React.Fragment>
            <div className={styles.user_block}>
                {!isLogin ?
                    <p className={styles.user_block__text}> 
                        Welcome, <Link to="/sign-in" className={styles.user_block__link}>login</Link> or <Link to="/sign-up" className={styles.user_block__link}> register </Link> for start !
                    </p>
                    : 
                    <div className={styles.user_login}>
                        <Link to={`/userdetails/${userInfo.user_id}`} className={styles.user_login_link}>
                            <img src={userInfo.avatar || userPhotoDefault} alt=""/>
                            <span>{userInfo.username || userInfo.email}</span>
                        </Link>
                        <div>
                            <img onClick={userLogout} className={styles.logout_icon} src={logoutIcon} alt=""/>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
};

export default UserBlock;
