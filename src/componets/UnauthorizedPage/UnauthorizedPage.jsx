import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './UnauthorizedPage.module.css';
import SignIn from '../SignPage/SignTabs/SignIn';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { userLoginRequest } from '../../actions/user';


const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    signInError: state.userReducer.signInError,
})

const mapDispatchToProps = (dispatch) => ({
    userLoginRequest: (values) => {
        dispatch(userLoginRequest(values));
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

const UnauthorizedPage = ({ userLoginRequest, isLogin, location, signInError }) => {
    const handleSignIn = (values) => {
        userLoginRequest(values);
    };

    if (isLogin) return <Redirect to={location.state.path} />

    return (
        <React.Fragment>
            <Header />
            <div className='flex-grow'>
                <div className='container'>
                    <div className="row">
                        <div className={styles.unauth_wrap}>
                            <h5>Unfortunately, the page you are trying to view is available only to the logged in users.</h5>
                            <h5>After successful login you will be redirected to the requested page.</h5>
                            <ErrorRender error={signInError}/>
                            <SignIn onSubmit={handleSignIn} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthorizedPage);