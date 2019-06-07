import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import productDefaultImg from '../../assets/images/product-default.jpg';

import { MyContext } from '../MainPage/MainPage';

const Product = ({ data, deleteProduct }) => {
    const eyeIcon = useContext(MyContext);
    return (
        <div className={styles.products__item + " col-lg-3 col-md-6"}>
            {deleteProduct 
                ? <div className={styles.product_btn_wrap}>
                    <button onClick={() => deleteProduct(data.pk)}>edit</button>
                    <button onClick={() => deleteProduct(data.pk)}>delete</button>
                </div>
                : null
            }
            <div className={styles.img_wrap}>
                <img className={styles.products__img} src={data.images.length !== 0 ? data.images[0].file : productDefaultImg } alt="" />
            </div>
            
            <Link to={`/products/${data.pk}`} className={styles.products__info}>
                <h5 className={styles.products__title}>{data.theme || 'Product Title'}</h5>
                <img src={eyeIcon} alt="" />
            </Link>
        </div>
    )
};

export default Product;
