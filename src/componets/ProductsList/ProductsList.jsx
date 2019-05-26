import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Product from './Product';

import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';

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

    state = {
        errorTriggered: false,
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    mapProducts(productList, searchValue) {
        return productList.map((item) => {
            return (
                searchValue.length === 0 || (item.theme !== null && item.theme.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                    <Product data={item} key={item.pk} />
                : null
            )
        })
    }

    render() {
        let { productList, searchValue } = this.props;
        if (this.state.errorTriggered) {
            throw new Error('Crashed');
        }
        return (
            <div className={styles.products + " flex-grow"}>
                <div className="container">
                    <button onClick={() => this.setState({ errorTriggered: true })} className={styles.error_trigger}>Error Trigger</button>
                    <div className="row">
                        {productList ?
                            this.mapProducts(productList, searchValue)
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);