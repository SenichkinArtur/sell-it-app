import React from 'react';
import { Link } from 'react-router-dom';
import UserBlock from './UserBlock/UserBlock';
import Search from './Search/Search';

import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row">
                    <div className={styles.logo + " col-lg-2 col-md-6"}>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <Search />
                    <UserBlock />
                </div>
            </div>
        </header>
    )
};

export default Header;