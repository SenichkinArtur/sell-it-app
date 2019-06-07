import React from 'react';
import { Link } from 'react-router-dom';
import UserBlock from './UserBlock/UserBlock';
import Search from './Search/Search';

import styles from './HeaderBlock.module.css';
import logo from '../../assets/images/logo.png';


const HeaderBlock = ({ data }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row">
                    <div className={styles.logo + " col-lg-2 col-md-6"}>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <Search
                        searchValue={data.searchValue}
                        searchValueChange={data.searchValueChange}
                    />
                    {data.userInfo && !data.isLoading
                        ? <UserBlock 
                            isLogin={data.isLogin}
                            userInfo={data.userInfo}
                            userLogout={data.userLogout}
                        />
                        : null
                    }
                </div>
            </div>
        </header>
    )
};

export default HeaderBlock;
