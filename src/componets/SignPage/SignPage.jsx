import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignIn from './SignTabs/SignIn';
import SignUp from './SignTabs/SignUp';
import styles from './SignPage.module.css';
import logo from "../../assets/images/logo-sign.png";

import { connect } from 'react-redux';
import { userLoginRequest, userSignUpRequest, errorClear } from '../../actions/user';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    signUpDone: state.userReducer.signUpDone,
    signInError: state.userReducer.signInError,
    signUpError: state.userReducer.signUpError
})

const mapDispatchToProps = (dispatch) => ({
    userLoginRequest: (values) => {
        dispatch(userLoginRequest(values));
    },
    userSignUpRequest: (values) => {
        dispatch(userSignUpRequest(values));
    },
    errorClear: () => {
        dispatch(errorClear());
    }
});

const ErrorRender = ({ error }) => {
    let errorsArr = [];
    for(let key in error) {
        errorsArr.push(error[key])
    }
    return (
        <div className={styles.error_wrap}>
            {errorsArr.map((item, index) => {
                return <p id="error" key={index}>{item}</p>
            })}
        </div>
    )
}

const SignPage = ({ activeTab, userLoginRequest, userSignUpRequest, isLogin, signUpDone, signInError, signUpError, errorClear }) => {
    const handleSignIn = (values) => {
        userLoginRequest(values);
    };

    const handleSignUp = (values) => {
        userSignUpRequest(values);
    };

    if (isLogin) return <Redirect to='/' />;

    return (
        <React.Fragment>
            <section className={styles.main}>
                <div className={styles.sign_block_wrap}>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className={styles.tabs_select}>
                        <Link to="/sign-in" className={`${styles.tabs_select__button} ${activeTab === "signin" ? styles.tabs_select__button_active : ""}`} onClick={ () => errorClear() }>Sign In</Link>
                        <Link to="/sign-up" className={`${styles.tabs_select__button} ${activeTab === "signup" ? styles.tabs_select__button_active : ""}`} onClick={ () => errorClear() }>Sign Up</Link>
                    </div>

                    {activeTab === "signin" ?
                        <React.Fragment>
                            {signUpDone ? <p className={styles.registration_done}>Registration done! Please login</p> : null}
                            <ErrorRender error={signInError} />
                            <SignIn onSubmit={handleSignIn} />
                        </React.Fragment> 
                        :
                        <React.Fragment>
                            <ErrorRender error={signUpError} />
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