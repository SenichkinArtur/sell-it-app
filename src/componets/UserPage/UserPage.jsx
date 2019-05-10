import React from 'react';
import "./UserPage.module.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './UserPage.module.css';
import userPhoto from '../../images/user-photo.jpg';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    user: state.userReducer.user
})

const UserPage = ({ user }) => {
    console.log(user);
    return (
        <React.Fragment>
            <Header />
                <div className="flex-grow">
                    <div className="container">
                        <div className="row">
                            <div className={styles.user_page}>
                                <img src={userPhoto} alt="" className={styles.user_page_image}/>
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