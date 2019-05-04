import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import eyeIcon from '../../../images/eye.png';
import product1 from '../../../images/product1.jpg';

const Product = ({data}) => {
    return (
        <div className={styles.products__item + " col-lg-3 col-md-6"}>
            <div className={styles.img_wrap}>
                <img className={styles.products__img} src={data.images.length !== 0 ? data.images[0].file : product1 } alt="" />
            </div>
            <Link to={`/products/${data.pk}`} className={styles.products__info}>
                <h5 className={styles.products__title}>{data.text}</h5>
                <img src={eyeIcon} alt="" />
            </Link>
        </div>
    )
};

export default Product;