import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignForms/SignIn';
import SignUp from './SignForms/SignUp';
import styles from './SignPage.module.css';
import logo from "../../assets/images/logo-sign.png";


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

const SignInBlock = (signUpDone, signInError, handleSignIn) => {
    return (
        <React.Fragment>
            {signUpDone ? <p className={styles.registration_done}>Registration done! Please login</p> : null}
            <ErrorRender error={signInError} />
            <SignIn onSubmit={handleSignIn} />
        </React.Fragment>
    )
}

const SignUpBlock = (signUpError, handleSignUp) => {
    return (
        <React.Fragment>
            <ErrorRender error={signUpError} />
            <SignUp onSubmit={handleSignUp} />
        </React.Fragment>
    )
}

const SignPage = ({ activeTab, signUpDone, signInError, signUpError, errorClear, handleSignIn, handleSignUp }) => {

    return (
        <section className={styles.main}>
            <div className={styles.sign_block_wrap}>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <div className={styles.tabs_select}>
                    <Link
                        to="/sign-in"
                        className={`${styles.tabs_select__button} ${activeTab === "signin" ? styles.tabs_select__button_active : ""}`}
                        onClick={() => errorClear()}
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/sign-up"
                        className={`${styles.tabs_select__button} ${activeTab === "signup" ? styles.tabs_select__button_active : ""}`}
                        onClick={() => errorClear()}
                    >
                        Sign Up
                    </Link>
                </div>

                {activeTab === "signin"
                    ? SignInBlock(signUpDone, signInError, handleSignIn)
                    : SignUpBlock(signUpError, handleSignUp)
                }

            </div>
        </section>
    )
}

export default SignPage;
