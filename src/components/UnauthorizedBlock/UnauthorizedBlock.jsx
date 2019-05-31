import React from 'react';

import styles from './UnauthorizedBlock.module.css';
import SignIn from '../SignPage/SignForms/SignIn';

const ErrorRender = ({ error }) => {
    let errorsArr = [];
    for(let key in error) {
        errorsArr.push(error[key])
    }
    return (
        <div className={styles.error_wrap}>
            {errorsArr.map((item, index) => {
                return <p id="error" key={index}>{item}</p>
            })}
        </div>
    )
}

const UnauthorizedBlock = ({ handleSignIn, signInError }) => {

    return (
        <div className='flex-grow'>
            <div className='container'>
                <div className="row">
                    <div className={styles.unauth_wrap}>
                        <h5>Unfortunately, the page you are trying to view is available only to the logged in users.</h5>
                        <h5>After successful login you will be redirected to the requested page.</h5>
                        <ErrorRender error={signInError}/>
                        <SignIn onSubmit={handleSignIn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnauthorizedBlock;
