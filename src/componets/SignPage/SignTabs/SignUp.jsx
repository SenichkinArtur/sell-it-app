import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from '../SignPage.module.css';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password1) {
        errors.password1 = 'Required';
    } else if (values.password1.length < 8) {
        errors.password1 = 'Must be 8 characters or more';
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).*$/.test(values.password1)) {
        errors.password1 = 'Must contain letters and numbers';
    } else if (!/^(?!.*\s).*$/.test(values.password1)) {
        errors.password1 = 'Cant contain whitespaces';
    }
    if (!values.password2) {
        errors.password2 = 'Required'
    } else if (values.password2 !== values.password1) {
        errors.password2 = 'Passwords must match'
    }
    return errors;
}

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