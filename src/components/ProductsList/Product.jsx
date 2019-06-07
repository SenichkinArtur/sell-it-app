import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import productDefaultImg from '../../assets/images/product-default.jpg';
import ProductForm from '../ProductForm/ProductForm';
import Popup from 'reactjs-popup';

import { MyContext } from '../MainPage/MainPage';

const Product = ({ data, deleteProduct, updateProduct }) => {
    const eyeIcon = useContext(MyContext);
    const [isOpenModal, setModal] = useState(false);

    const handleSubmit = (data) => {
        setModal(false);
        updateProduct({id: data.pk, data});
    }
    return (
        <React.Fragment>
            <Popup
                open={isOpenModal}
                closeOnDocumentClick
                onClose={() => setModal(false)}
            >
                <React.Fragment>
                    <div className={styles.close + ' close'} onClick={() => setModal(false)}>
                        &times;
                    </div>
                    <h5>Edit Product</h5>
                    <ProductForm onSubmit={handleSubmit} initialValues={data}/>
                </React.Fragment>
            </Popup>

            <div className={styles.products__item + " col-lg-3 col-md-6"}>
                {deleteProduct 
                    ? <div className={styles.product_btn_wrap}>
                        <button onClick={() => setModal(true) }>edit</button>
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
        </React.Fragment>
    )
};

export default Product;
