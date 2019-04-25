import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignIn from './SignTabs/SignIn';
import SignUp from './SignTabs/SignUp';
import './SignPage.css';

import logo from "../../images/logo-sign.png";


class SignPage extends Component {
    state = {
        activeSignIn: true,
    }

    showSignInTab() {
        this.setState({
            activeSignIn: true,
        })
    }
    showSignUpTab() {
        this.setState({
            activeSignIn: false,
        })
    }

    render() {

        return (
            <div>
                <section className="main">
                    <div className="sign-block-wrap">
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <div className="tabs-select">
                            <button className={`tabs-select__button ${this.state.activeSignIn ? "tabs-select__button_active" : ""}`} onClick={() => this.showSignInTab()}>Sign In</button>
                            <button className={`tabs-select__button ${!this.state.activeSignIn ? "tabs-select__button_active" : ""}`} onClick={() => this.showSignUpTab()}>Sign Up</button>
                        </div>
                        {
                            this.state.activeSignIn ?
                                <SignIn />
                            :
                                <SignUp />
                        }
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default SignPage;