import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './ProductForm.module.css';


const renderField = ({ input, label, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} />
        </div>
    )
}


let NewProduct = ({ handleSubmit }) => {

    return (
        <div className="flex-grow">
            <div className="container">
                <div className="row">
                    <div className={styles.form_wrapper}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <Field name="theme" type="text" label="Theme" component={renderField}/>
                            <Field name="text" type="text" label="Text" component={renderField}/>
                            <Field name="price" type="number" label="Price" component={renderField}/>
                            <Field name="category" type="text" label="Category" component={renderField}/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'newProduct'
})(NewProduct);
