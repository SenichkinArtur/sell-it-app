import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import eyeIcon from '../../assets/images/eye.png';
import productDefaultImg from '../../assets/images/product-default.jpg';

const Product = ({data}) => {
    return (
        <div className={styles.products__item + " col-lg-3 col-md-6"}>
            <div className={styles.img_wrap}>
                <img className={styles.products__img} src={data.images.length !== 0 ? data.images[0].file : productDefaultImg } alt="" />
            </div>
            <Link to={`/products/${data.pk}`} className={styles.products__info}>
                <h5 className={styles.products__title}>{data.text || 'Product Title'}</h5>
                <img src={eyeIcon} alt="" />
            </Link>
        </div>
    )
};

export default Product;