import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import NewProductForm from '../NewProductForm/NewProductForm';
import ProductList from '../ProductsList/ProductsList';
import styles from './ManageProductsPage.module.css';

const ManageProductsPage = ({ isLogin, addProduct, deleteProduct, ownProductsList, searchValue }) => {

    const [isOpenModal, setModal] = useState(false);
    const handleSubmit = (data) => {
        setModal(false);
        addProduct(data);
    }
    return (
        <React.Fragment>
            <h5>Your Products</h5>
            <button onClick={() => setModal(true)} className={styles.popup_trigger}>add product</button>
            <Popup
                open={isOpenModal}
                closeOnDocumentClick
                onClose={() => setModal(false)}
            >
                <React.Fragment>
                    <div className={styles.close + ' close'} onClick={() => setModal(false)}>
                        &times;
                    </div>
                    <h5>New Product</h5>
                    <NewProductForm isLogin={isLogin} onSubmit={handleSubmit}/>
                </React.Fragment>
            </Popup>

            {ownProductsList 
                ? <ProductList 
                    productList={ownProductsList}
                    searchValue={searchValue}
                    deleteProduct={deleteProduct}
                />
                : null
            }
        </React.Fragment>
    )
}

export default ManageProductsPage;