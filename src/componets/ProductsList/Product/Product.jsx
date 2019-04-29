import React from 'react';
import styles from './Product.module.css';
import eyeIcon from '../../../images/eye.png';

function Product(props) {
    let { data } = props;
    return (
        <div className={styles.products__item + " col-lg-3 col-md-6"}>
            <img className={styles.products__img} src={data.image} alt="" />
            <div className={styles.products__info}>
                <h5 className={styles.products__title}>{data.title}</h5>
                <img src={eyeIcon} alt="" />
            </div>
        </div>
    )
}

export default Product;