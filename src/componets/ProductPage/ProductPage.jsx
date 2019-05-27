import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import productDefaultImg from '../../assets/images/product-default.jpg';
import styles from './ProductPage.module.css';


const ProductPage = ({ singleProduct }) => {
    
    return(
        <React.Fragment>
            <Header />
            <div className="container flex-grow">
                <div className="row">
                    {singleProduct ?
                        <div className={styles.productPage}>
                            <h3>{singleProduct.text}</h3>
                            <div className={styles.productInfo}>
                                <div className="col-lg-6">
                                    <img src={singleProduct.images.length !== 0 ? singleProduct.images[0].file : productDefaultImg } alt=""/>
                                </div>
                                <div className={styles.productText + " col-lg-6"}>
                                    <p><span>Title: </span>{singleProduct.text || 'Product Title'}</p>
                                    <p><span>Theme: </span>{singleProduct.theme}</p>
                                    <p><span>Price: </span>{singleProduct.price}</p>
                                    <p><span>Added by: </span>{singleProduct.owner.username}</p>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ProductPage;
