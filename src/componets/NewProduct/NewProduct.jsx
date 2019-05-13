import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Field, reduxForm } from 'redux-form';
import styles from './NewProduct.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const renderField = ({ input, label, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin
})

let NewProduct = ({ isLogin }) => {
    if (!isLogin) return <Redirect to='/' />
    return (
        <React.Fragment>
            <Header />
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
            <Footer />
        </React.Fragment>
    )
}

NewProduct = connect(mapStateToProps)(NewProduct);

export default reduxForm({
    form: 'newProduct',
})(NewProduct);