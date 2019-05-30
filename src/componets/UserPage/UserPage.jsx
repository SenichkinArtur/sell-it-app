import React from 'react';
import "./UserPage.module.css";
import Header from '../../containers/Header';
import Footer from '../Footer/Footer';
import styles from './UserPage.module.css';
import userPhotoDefault from '../../assets/images/user-photo.jpg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
    userAvatar: state.userReducer.avatar
})

const UserPage = ({ user, isLogin, userAvatar }) => {
    if (!isLogin) return <Redirect to='/' />;
    return (
        <React.Fragment>
            <Header />
                <div className="flex-grow">
                    <div className="container">
                        <div className="row">
                            <div className={styles.user_page}>
                                <img src={userAvatar || userPhotoDefault} alt="" className={styles.user_page_image}/>
                                <div className={styles.user_page_info}>
                                    <p>User Name: <span>{user.username}</span></p>
                                    <p>User ID: <span>{user.user_id}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(UserPage);