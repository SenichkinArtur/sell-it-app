import React from 'react';
import { Link } from 'react-router-dom';
import UserBlock from './UserBlock/UserBlock';
import Search from './Search/Search';

import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';


export const ThemeContext = React.createContext({});

const Header = () => {
    
    return (
        <ThemeContext.Provider value={{str: 'context'}}>
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
        </ThemeContext.Provider>
    )
};

export default Header;