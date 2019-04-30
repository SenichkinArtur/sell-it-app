import React, { Component } from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product/Product';
import Footer from '../Footer/Footer';

class ProductList extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        fetch("http://light-it-04.tk/api/posters/")
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    items: res.data
                });
            }
        );
    }
    
    render() {
        let { items } = this.state;

        return (
            <div>
                <Header />
                <div className={styles.products}>
                    <div className="container">
                        <div className="row">
                        {items ?
                              items.map((item, index) => {
                                return (
                                    <Product data={item} key={index} />
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

export default ProductList;