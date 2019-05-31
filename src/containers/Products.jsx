import React, { Component } from 'react';
import ProductList from '../components/ProductsList/ProductsList';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';

const mapStateToProps = (state) => ({
    productList: state.productsReducer.productList,
    searchValue: state.productsReducer.searchValue
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => {
        dispatch(fetchProducts());
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
            <ProductList
                productList={productList}
                searchValue={searchValue}
                errorTrigger={() => this.setState({ errorTriggered: true })}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
