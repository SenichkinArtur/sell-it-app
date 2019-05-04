import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product/Product';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/fetchProducts';

const mapStateToProps = (state) => ({
    productList: state.productsReducer.productList,
    searchValue: state.productsReducer.searchValue
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => {
        dispatch(fetchProducts());
    }
});

class ProductList extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    mapProducts(productList, searchValue) {
        return productList.map((item) => {
            return (
                searchValue.length === 0 || (item.text !== null && item.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                    <Product data={item} key={item.pk} />
                : null
            )
        })
    }

    render() {
        let { productList, searchValue } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div className={styles.products + " flex-grow"}>
                    <div className="container">
                        <div className="row">
                            {productList ?
                                this.mapProducts(productList, searchValue)
                                : null
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);