import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserInfo from '../components/UserInfo/UserInfo';
import Header from './Header';
import Footer from '../components/Footer/Footer';
import { updateUser } from '../actions/user';


const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) => {
        dispatch(updateUser(data))
    }
})

const UserPage = ({ user, isLogin, updateUser }) => {
    if (!isLogin) return <Redirect to='/' />;
    return (
        <React.Fragment>
            <Header />
            <UserInfo
                user={user}
                updateUser={updateUser}
            />
            <Footer/>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
