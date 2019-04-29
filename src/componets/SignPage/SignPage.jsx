import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignIn from './SignTabs/SignIn';
import SignUp from './SignTabs/SignUp';

import styles from './SignPage.module.css';
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
        let { activeSignIn } = this.state;
        return (
            <React.Fragment>
                <section className={styles.main}>
                    <div className={styles.sign_block_wrap}>
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <div className={styles.tabs_select}>
                            <button className={`${styles.tabs_select__button} ${activeSignIn ? styles.tabs_select__button_active : ""}`} onClick={() => this.showSignInTab()}>Sign In</button>
                            <button className={`${styles.tabs_select__button} ${!activeSignIn ? styles.tabs_select__button_active : ""}`} onClick={() => this.showSignUpTab()}>Sign Up</button>
                        </div>
                        {
                            activeSignIn ?
                                <SignIn />
                            :
                                <SignUp />
                        }
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SignPage;