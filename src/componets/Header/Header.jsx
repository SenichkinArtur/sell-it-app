import React from 'react';
import { Link } from 'react-router-dom';
import UserBlock from './UserBlock/UserBlock'

import './Header.css';
import logo from '../../images/logo.png';


function Header() {
    
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logo col-lg-2 col-md-6">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="search-block col-lg-4 col-md-8 offset-md-2 offset-lg-0">
                        <input type="search" className="search-block__input" placeholder="Try find something" />
                    </div>
                    <UserBlock />
                </div>
            </div>
        </header>
    )
}

export default Header;