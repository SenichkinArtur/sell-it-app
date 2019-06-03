import React, { Component } from 'react';
import ProductList from '../components/ProductsList/ProductsList';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';

const mapStateToProps = (state) => ({
    productList: state.productsReducer.productList,
    searchValue: state.productsReducer.searchValue
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (page) => {
        dispatch(fetchProducts(page));
    }
});

class Products extends Component {

    state = {
        errorTriggered: false,
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        let { productList, searchValue } = this.props;
        if (this.state.errorTriggered) {
            throw new Error('Crashed');
        }
        
        return (
            productList
            ? <ProductList
                productList={productList.data}
                productsMeta={productList.meta}
                searchValue={searchValue}
                errorTrigger={() => this.setState({ errorTriggered: true })}
                fetchProducts={this.props.fetchProducts}
            />
            : null
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
