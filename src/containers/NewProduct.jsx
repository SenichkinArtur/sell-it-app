import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../containers/Header';
import Footer from '../components/Footer/Footer'
import NewProductForm from '../components/NewProductForm/NewProductForm';
import { addProduct, deleteProduct } from '../actions/products';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => {
        dispatch(addProduct(data));
    },
    deleteProduct: (id) => {
        dispatch(deleteProduct(id));
    }
})

let NewProduct = ({ isLogin, addProduct, deleteProduct }) => {
    if (!isLogin) return <Redirect to='/' />
    return (
        <React.Fragment>
            <Header />
            <NewProductForm isLogin={isLogin} onSubmit={addProduct}/>
            {/* <button onClick={() => deleteProduct()}>delete</button> */}
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
