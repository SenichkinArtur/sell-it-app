import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './UserForm.module.css';


const renderField = ({ input, label, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} />
        </div>
    )
}

let UserForm = ({ handleSubmit }) => {

    return (
        <div className="flex-grow">
            <div className="container">
                <div className="row">
                    <div className={styles.form_wrapper}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <Field name="username" type="text" label="Username" component={renderField}/>
                            <Field name="first_name" type="text" label="First name" component={renderField}/>
                            <Field name="last_name" type="text" label="Last name" component={renderField}/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'userForm'
})(UserForm);
