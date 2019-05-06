import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserBlock.module.css';
import userPhoto from '../../../images/user-photo.jpg';
import logoutIcon from '../../../images/logout-icon.png';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../../../actions/user';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    userLogin: () => {
        dispatch(userLogin());
    },
    userLogout: () => {
        dispatch(userLogout());
    }
});

const UserBlock = ({ isLogin, userLogin, userLogout }) => {
    let userId = 1;
    let path = `/userdetails/${userId}`;
    const loginTest = () => {
        userLogin();
    };
    const logoutTest = () => {
        userLogout();
    };
    return (
        <React.Fragment>
            <div className={styles.user_block}>
                {!isLogin ?
                    <p className={styles.user_block__text}> Welcome, <Link to="/sign-in" className={styles.user_block__link}>login</Link> or <Link to="/sign-up" className={styles.user_block__link}> register </Link> for start !</p>
                    : 
                    <div className={styles.user_login}>
                        <Link to={path} className={styles.user_login_link}>
                            <img src={userPhoto} alt=""/>
                            <span>Kim Evans</span>
                        </Link>
                        <div>
                            <img onClick={() => logoutTest()} className={styles.logout_icon} src={logoutIcon} alt=""/>
                        </div>
                    </div>
                }
            </div>
            <button onClick={() => loginTest()} className={styles.login_test}>test login</button>
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);