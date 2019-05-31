import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignPage from '../components/SignPage/SignPage';
import Footer from '../components/Footer/Footer';
import { userLogin, userSignUp, errorClear } from '../actions/user';

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
    },
    errorClear: () => {
        dispatch(errorClear());
    }
});

const Auth = (props) => {
    const {
        activeTab,
        userLogin,
        userSignUp,
        isLogin,
        signUpDone,
        signInError,
        signUpError,
        errorClear
    } = props;

    const handleSignIn = (values) => {
        userLogin(values);
    };

    const handleSignUp = (values) => {
        userSignUp(values);
    };

    if (isLogin) return <Redirect to='/' />;

    return (
        <React.Fragment>
            <SignPage
                activeTab={activeTab}
                signUpDone={signUpDone}
                signInError={signInError}
                signUpError={signUpError}
                errorClear={errorClear}
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
            />
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
