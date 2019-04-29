import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserBlock.module.css';


function UserBlock() {
    
    return (
        <div className={styles.user_block}>
            <p className={styles.user_block__text}> Welcome, <Link to="/sign" className={styles.user_block__link}>login</Link> or <Link to="/sign" className={styles.user_block__link}> register </Link> for start !</p>
        </div>
    )
}

export default UserBlock;