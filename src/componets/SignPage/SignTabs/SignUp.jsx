import React from 'react';

function SignUp() {
    return (
        <div className="sign-block sign-block__sign-up">                
            <form action="">
                <input className="form__input" type="email" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <input className="form__input form__submit" type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default SignUp;