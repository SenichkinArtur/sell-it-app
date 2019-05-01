import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product/Product';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/fetchProducts';

const mapStateToProps = (state) => ({
    productList: state.productsReducer.productList,
    isLoaded: state.productsReducer.isLoaded
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

    mapProducts(productList) {
        return productList.map((item) => {
            return (
                <Product data={item} key={item.pk} />
            )
        })
    }

    render() {
        let { productList, isLoaded } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div className={styles.products + " flex-grow"}>
                    <div className="container">
                        <div className="row">
                        {isLoaded ?
                            this.mapProducts(productList)
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