import React from 'react';
import { Link } from 'react-router-dom';
import styles from './errors.module.css';

const NotFound = () => {
    return (
        <div className={styles.error_page_wrap}>
            <h1>404 - PAGE NOT FOUND</h1>
            <p className={styles.error_page_text}>The page you are looking for might have been removed had it's name changed or is temporary unavailable</p>
            <Link to='/' className={styles.error_page_link}>GO TO HOME PAGE</Link>
        </div>
    )
}

export default NotFound;