import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserInfo from '../components/UserInfo/UserInfo';
import Header from './Header';
import Footer from '../components/Footer/Footer';


const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
})

const UserPage = ({ user, isLogin }) => {
    if (!isLogin) return <Redirect to='/' />;
    return (
        <React.Fragment>
            <Header />
            <UserInfo
                user={user}
            />
            <Footer/>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(UserPage);
