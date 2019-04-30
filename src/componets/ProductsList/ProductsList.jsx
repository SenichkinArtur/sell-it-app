import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product/Product';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

const mapStateToProps = (state) => ({
    productList: state.productList
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
    
    render() {
        let { productList } = this.props;
        console.log(this.props);
        return (
            <div>
                <Header />
                <div className={styles.products}>
                    <div className="container">
                        <div className="row">
                        {productList ?
                              productList.map((item) => {
                                return (
                                    <Product data={item} key={item.pk} />
                                )
                            })
                            : null
                        }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);