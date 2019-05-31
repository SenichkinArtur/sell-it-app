import React from 'react';
import styles from './ProductsList.module.css';
import Product from './Product';

const ProductList = ({ productList, searchValue, errorTrigger }) => {

    const mapProducts = (productList, searchValue) => {
        return productList.map((item) => {
            return (
                searchValue.length === 0 || (item.theme !== null && item.theme.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                    <Product data={item} key={item.pk} />
                : null
            )
        })
    }

    return (
        <div className={styles.products + " flex-grow"}>
            <div className="container">
                <button onClick={() => errorTrigger()} className={styles.error_trigger}>Error Trigger</button>

                <div className="row">
                    {productList
                        ? mapProducts(productList, searchValue)
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList;
