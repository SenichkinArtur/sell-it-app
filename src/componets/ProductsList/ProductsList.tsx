import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product';
import Footer from '../Footer/Footer';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';

interface Props {
    productList: [],
    searchValue: string,
    fetchProducts: () => void,
    productsReducer: {
        productList: [],
        searchValue: string
    }
}

const mapStateToProps = (state: Props) => ({
    productList: state.productsReducer.productList,
    searchValue: state.productsReducer.searchValue
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchProducts: () => {
        dispatch(fetchProducts());
    }
});

class ProductList extends Component<Props> {

    componentDidMount() {
        this.props.fetchProducts();
    }

    mapProducts(productList: [], searchValue: string) {
        return productList.map((item: any) => {
            let { theme, pk } = item;
            return (
                searchValue.length === 0 || (theme !== null && theme.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                    <Product data={item} key={pk} />
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
