import React from 'react';

import Header from '../../containers/Header';
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
                            <h3>{singleProduct.theme}</h3>
                            <div className={styles.productInfo}>
                                <div className="col-lg-6">
                                    <img src={singleProduct.images.length !== 0 ? singleProduct.images[0].file : productDefaultImg } alt=""/>
                                </div>
                                <div className={styles.productText + " col-lg-6"}>
                                    <p><span>Theme: </span>{singleProduct.theme || 'Product Title'}</p>
                                    <p><span>Text: </span>{singleProduct.text}</p>
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
