import React from 'react';

function SignIn() {
    return (
        <div className="sign-block sign-block__sign-in">                
            <form action="">
                <input className="form__input" type="email" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <input className="form__input form__submit" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignIn;