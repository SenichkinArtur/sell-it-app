import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../../images/logo.png';


class Header extends Component {
    render() {

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
                        <div className="user-block">
                            <p className="user-block__text"> Welcome, <Link to="/sign" className="user-block__link">login</Link> or <Link to="/sign" className="user-block__link"> register </Link> for start !</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;