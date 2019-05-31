import React, { Component } from 'react';
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

class SingleProduct extends Component {

    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId);
    }

    render() {
        let { singleProduct, isLogin } = this.props;
        if (!isLogin) return <Redirect to='/' />
        return(
            <ProductPage
                singleProduct={singleProduct}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
