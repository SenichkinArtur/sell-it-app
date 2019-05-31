import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchSingleProduct } from '../actions/products';
import ProductPage from '../components/ProductPage/ProductPage';


const mapStateToProps = (state) => ({
    singleProduct: state.productsReducer.singleProduct,
    isLogin: state.userReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleProduct: (id) => {
        dispatch(fetchSingleProduct(id));
    }
});

const SingleProduct = ({ fetchSingleProduct, productId, isLogin, singleProduct }) => {

    useEffect(() => {
        async function fetchData() {
            await fetchSingleProduct(productId);
        }
        fetchData();
    }, [fetchSingleProduct, productId]);
    
    if (!isLogin) return <Redirect to='/' />

    return(
        <ProductPage
            singleProduct={singleProduct}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
