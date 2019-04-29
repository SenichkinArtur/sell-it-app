import React from 'react';
import styles from '../SignPage.module.css';

function SignIn() {
    return (
        <div className={styles.sign_block + styles.sign_block__sign_in}>        
            <form action="">
                <input className={styles.form__input} type="email" placeholder="Email" />
                <input className={styles.form__input} type="password" placeholder="Password" />
                <input className={styles.form__input + styles.form__submit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignIn;