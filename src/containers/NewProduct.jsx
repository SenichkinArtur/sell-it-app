import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../containers/Header';
import Footer from '../components/Footer/Footer'
import NewProductForm from '../components/NewProductForm/NewProductForm';


const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin
})

let NewProduct = ({ isLogin }) => {
    if (!isLogin) return <Redirect to='/' />
    return (
        <React.Fragment>
            <Header />
            <NewProductForm isLogin={isLogin} />
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, null)(NewProduct);
