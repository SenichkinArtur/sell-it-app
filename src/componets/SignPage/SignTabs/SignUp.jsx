import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from '../SignPage.module.css';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more'
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
            <Field name="email" type="email" label="Email" component={renderField}/>
            <Field name="password" type="password" label="Password" component={renderField}/>
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