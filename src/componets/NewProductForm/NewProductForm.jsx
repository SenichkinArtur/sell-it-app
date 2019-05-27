import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './NewProductForm.module.css';


const renderField = ({ input, label, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type}/>
        </div>
    )
}

let NewProduct = () => {
    
    return (
        <div className="flex-grow">
            <div className="container">
                <div className="row">
                    <div className={styles.form_wrapper}>
                        <form className={styles.form}>
                            <Field name="theme" type="text" label="Theme" component={renderField}/>
                            <Field name="text" type="text" label="Text" component={renderField}/>
                            <Field name="price" type="number" label="Price" component={renderField}/>
                            <Field name="currency" type="text" label="Currency" component={renderField}/>
                            <Field name="contract_price" type="text" label="Contract Price" component={renderField}/>
                            <Field name="location" type="text" label="Location" component={renderField}/>
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
    form: 'newProduct',
})(NewProduct);
