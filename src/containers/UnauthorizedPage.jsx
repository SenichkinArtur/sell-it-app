import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UnauthorizedBlock from '../components/UnauthorizedBlock/UnauthorizedBlock';
import Header from './Header';
import Footer from '../components/Footer/Footer';
import { userLogin } from '../actions/user';


const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    signInError: state.userReducer.signInError,
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    }
});

const UnauthorizedPage = ({ userLogin, isLogin, location, signInError }) => {
    const handleSignIn = (values) => {
        userLogin(values);
    };

    if (isLogin) return <Redirect to={location.state.path} />

    return (
        <React.Fragment>
            <Header />
            <UnauthorizedBlock
                handleSignIn={handleSignIn}
                signInError={signInError}
            />
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthorizedPage);
