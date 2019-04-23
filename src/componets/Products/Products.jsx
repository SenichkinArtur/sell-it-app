import React, { Component } from 'react';
import './Products.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';
import eyeIcon from '../../images/eye.png';


class Products extends Component {

    render() {
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
                <div className="products">
                    <div className="container">
                        <div className="row">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="products__item col-lg-3 col-md-6">
                                        <img className="products__img" src={item.image} alt="" />
                                        <div className="products__info">
                                            <h5 className="products__title">{item.title}</h5>
                                            <img src={eyeIcon} alt="" />
                                        </div>
                                    </div>
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
}

export default Products;