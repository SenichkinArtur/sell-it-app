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

const SignIn = ({ handleSubmit }) => {
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
  form: 'signin',
  validate
})(SignIn);