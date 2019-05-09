import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignIn from './SignTabs/SignIn';
import SignUp from './SignTabs/SignUp';
import styles from './SignPage.module.css';
import logo from "../../images/logo-sign.png";

import { connect } from 'react-redux';
import { userLogin } from '../../actions/user';

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    }
});



const SignPage = ({ activeTab, userLogin }) => {
    const handleSubmit = (values) => {
        userLogin(values);
    };
    return (
        <React.Fragment>
            <section className={styles.main}>
                <div className={styles.sign_block_wrap}>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className={styles.tabs_select}>
                        <Link to="/sign-in" className={`${styles.tabs_select__button} ${activeTab === "signin" ? styles.tabs_select__button_active : ""}`}>Sign In</Link>
                        <Link to="/sign-up" className={`${styles.tabs_select__button} ${activeTab === "signup" ? styles.tabs_select__button_active : ""}`}>Sign Up</Link>
                    </div>
                    {
                        activeTab === "signin" ?
                            <SignIn onSubmit={handleSubmit} />
                        :
                            <SignUp onSubmit={handleSubmit} />
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default connect(null, mapDispatchToProps)(SignPage);