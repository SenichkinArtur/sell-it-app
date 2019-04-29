import React from 'react';
import { Link } from 'react-router-dom';
import UserBlock from './UserBlock/UserBlock'

import styles from './Header.module.css';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row">
                    <div className={styles.logo + " col-lg-2 col-md-6"}>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className={styles.search_block + " col-lg-4 col-md-8 offset-md-2 offset-lg-0 "}>
                        <input type="search" className={styles.search_block__input} placeholder="Try find something" />
                    </div>
                    <UserBlock />
                </div>
            </div>
        </header>
    )
};

export default Header;