import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from '../components/Footer/Footer'
import ManageProductPage from '../components/ManageProductsPage/ManageProductsPage';
import { addProduct, deleteProduct, fetchOwnProducts, updateProduct } from '../actions/products';

const mapStateToProps = (state) => ({
    isLogin: state.userReducer.isLogin,
    ownProductsList: state.productsReducer.ownProductList,
    searchValue: state.productsReducer.searchValue
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => {
        dispatch(addProduct(data));
    },
    deleteProduct: (id) => {
        dispatch(deleteProduct(id));
    },
    fetchOwnProducts: () => {
        dispatch(fetchOwnProducts());
    },
    updateProduct: ({ id, data }) => {
        dispatch(updateProduct({ id, data }));
    }
})

let ManageProduct = (props) => {
    const {
        isLogin,
        addProduct,
        deleteProduct,
        ownProductsList,
        fetchOwnProducts,
        searchValue,
        updateProduct
    } = props;
    
    useEffect(() => {
        fetchOwnProducts();
    }, [fetchOwnProducts]);
    
    if (!isLogin) return <Redirect to='/' />
    
    return (
        <React.Fragment>
            <Header />
            <ManageProductPage
                isLogin={isLogin}
                addProduct={addProduct}
                deleteProduct={deleteProduct}
                ownProductsList={ownProductsList}
                searchValue={searchValue}
                fetchOwnProducts={fetchOwnProducts}
                updateProduct={updateProduct}
            />
            <Footer />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
