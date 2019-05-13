import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserBlock.module.css';
import userPhoto from '../../../images/user-photo.jpg';
import logoutIcon from '../../../images/logout-icon.png';
import { connect } from 'react-redux';
import { userLogout } from '../../../actions/user';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    userName: state.userReducer.user.username,
    userId: state.userReducer.user.user_id,
    userEmail: state.userReducer.user.email
});

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => {
        dispatch(userLogout());
    }
});

const UserBlock = ({ isLogin, userName, userId, userLogout, userEmail }) => {
    return (
        <React.Fragment>
            <Link to="/new-product">Add new item</Link>
            <div className={styles.user_block}>
                {!isLogin ?
                    <p className={styles.user_block__text}> 
                        Welcome, <Link to="/sign-in" className={styles.user_block__link}>login</Link> or <Link to="/sign-up" className={styles.user_block__link}> register </Link> for start !
                    </p>
                    : 
                    <div className={styles.user_login}>
                        <Link to={`/userdetails/${userId}`} className={styles.user_login_link}>
                            <img src={userPhoto} alt=""/>
                            <span>{userName || userEmail}</span>
                        </Link>
                        <div>
                            <img onClick={userLogout} className={styles.logout_icon} src={logoutIcon} alt=""/>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);