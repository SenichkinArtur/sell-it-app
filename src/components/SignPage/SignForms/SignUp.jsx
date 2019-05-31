import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from '../SignPage.module.css';
import validate from '../../../utils/validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type} className={styles.form__input}/>
            <div className={styles.form__input_error}>
                {touched && ((error && <span className={styles.form__input_error}>{error}</span>))} 
            </div>
        </div>
    )
}

const SignUp = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" label="User name" component={renderField}/>
            <Field name="email" type="email" label="Email" component={renderField}/>
            <Field name="password1" type="password" label="Password" component={renderField}/>
            <Field name="password2" type="password" label="Confirm password" component={renderField}/>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUp);