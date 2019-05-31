import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchSingleProduct, clearSingleProductState } from '../actions/products';
import ProductPage from '../components/ProductPage/ProductPage';


const mapStateToProps = (state) => ({
    singleProduct: state.productsReducer.singleProduct,
    isLogin: state.userReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleProduct: (id) => {
        dispatch(fetchSingleProduct(id));
    },
    clearSingleProductState: () => {
        dispatch(clearSingleProductState());
    }
});

const SingleProduct = ({ fetchSingleProduct, clearSingleProductState, productId, isLogin, singleProduct }) => {

    useEffect(() => {
        fetchSingleProduct(productId);
    }, [fetchSingleProduct, productId]);

    useEffect(() => {
        return () => {
            clearSingleProductState();
        }
    }, [clearSingleProductState]);
    
    if (!isLogin) return <Redirect to='/' />

    return(
            <ProductPage
                singleProduct={singleProduct}
            />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
