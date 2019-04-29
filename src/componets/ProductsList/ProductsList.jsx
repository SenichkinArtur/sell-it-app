import React from 'react';
import styles from './ProductsList.module.css';
import Header from '../Header/Header';
import Product from './Product/Product';
import Footer from '../Footer/Footer';

import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';

function ProductsList() {

    let data = [
        {
            "title": "Product Title",
            "image": product1
        },
        {
            "title": "Product Title",
            "image": product2
        },
        {
            "title": "Product Title",
            "image": product3
        },
        {
            "title": "Product Title",
            "image": product4
        },
    ];
    data = data.concat(data).concat(data);

    return (
        <div>
            <Header />
            <div className={styles.products}>
                <div className="container">
                    <div className="row">
                    {
                        data.map((item, index) => {
                            return (
                                <Product data={item} key={index} />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductsList;