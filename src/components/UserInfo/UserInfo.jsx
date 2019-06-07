import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './UserInfo.module.css';
import userPhotoDefault from '../../assets/images/user-photo.jpg';
import UserForm from '../UserForm/UserForm';


const UserInfo = ({ user, updateUser }) => {
    
    const [isOpenModal, setModal] = useState(false);
    
    const handleSubmit = (data) => {
        setModal(false);
        updateUser(data);
    }
    return (
        <React.Fragment>
            <Popup
                open={isOpenModal}
                closeOnDocumentClick
                onClose={() => setModal(false)}
            >
                <React.Fragment>
                    <div className={styles.close + ' close'} onClick={() => setModal(false)}>
                        &times;
                    </div>
                    <h5>Edit User info</h5>
                    <UserForm onSubmit={handleSubmit} initialValues={user}/>
                </React.Fragment>
            </Popup>
            {user 
                ? <div className="flex-grow">
                    <div className="container">
                        <div className="row">
                            <div className={styles.user_page}>
                                <img src={user.avatar || userPhotoDefault} alt="" className={styles.user_page_image}/>
                                <div className={styles.user_page_info}>
                                    <p>User Name: <span>{user.username}</span></p>
                                    <p>User ID: <span>{user.user_id || user.id}</span></p>
                                    <p>First name: <span>{user.first_name}</span></p>
                                    <p>Last name: <span>{user.last_name}</span></p>
                                    <button onClick={() => setModal(true)}>qwe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
            
        </React.Fragment>
    )
}

export default UserInfo;
