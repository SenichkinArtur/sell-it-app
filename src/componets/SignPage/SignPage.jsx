import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignIn from './SignTabs/SignIn';
import SignUp from './SignTabs/SignUp';
import styles from './SignPage.module.css';
import logo from "../../images/logo-sign.png";

import { connect } from 'react-redux';
import { userLogin, userSignUp } from '../../actions/user';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    signUpDone: state.userReducer.signUpDone,
    signInError: state.userReducer.signInError,
    signUpError: state.userReducer.signUpError
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    },
    userSignUp: (values) => {
        dispatch(userSignUp(values));
    }
});

const SignPage = ({ activeTab, userLogin, userSignUp, isLogin, signUpDone, signInError, signUpError }) => {

    const handleSignIn = (values) => {
        userLogin(values);
    };

    const handleSignUp = (values) => {
        userSignUp(values);
    };

    const errorRender = (error) => {
        let errorsArr = [];
        for(let key in error) {
            errorsArr.push(error[key])
        }
        return (
            <div className={styles.error_wrap}>
                {errorsArr.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        )
    }

    if (isLogin) return <Redirect to='/' />;

    return (
        <React.Fragment>
            <section className={styles.main}>
                <div className={styles.sign_block_wrap}>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className={styles.tabs_select}>
                        <Link to="/sign-in" className={`${styles.tabs_select__button} ${activeTab === "signin" ? styles.tabs_select__button_active : ""}`}>Sign In</Link>
                        <Link to="/sign-up" className={`${styles.tabs_select__button} ${activeTab === "signup" ? styles.tabs_select__button_active : ""}`}>Sign Up</Link>
                    </div>
                    {activeTab === "signin" ?

                        <React.Fragment>
                            {signUpDone ? <p className={styles.registration_done}>Registration done! Please login</p> : null}
                            {errorRender(signInError)}
                            <SignIn onSubmit={handleSignIn} />
                        </React.Fragment> 
                        :
                        <React.Fragment>
                            {errorRender(signUpError)}
                            <SignUp onSubmit={handleSignUp} />
                        </React.Fragment>
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignPage);