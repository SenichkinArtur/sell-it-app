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
    isLoading: state.userReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (values) => {
        dispatch(userLogin(values));
    }
});

const UnauthorizedPage = ({ userLogin, isLogin, location, signInError, isLoading }) => {
    const handleSignIn = (values) => {
        userLogin(values);
    };

    if (isLogin) return <Redirect to={location.state.path} />

    return (
        <React.Fragment>
            <Header />
            <div className='flex-grow'>
                {!isLoading 
                    ? <UnauthorizedBlock
                        handleSignIn={handleSignIn}
                        signInError={signInError}
                    />
                    : null
                }
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthorizedPage);
