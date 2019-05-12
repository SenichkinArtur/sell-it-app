import React from 'react';
import { Link } from 'react-router-dom';
import styles from './errors.module.css';

const ServerError = () => {
    return (
        <div className={styles.error_page_wrap}>
            <h1>500 - SERVER ERROR</h1>
            <h5 className={styles.error_page_text}>It's not you, it's me</h5>
            <p>Refresh the page or try again later</p>
        </div>
    )
}

export default ServerError;