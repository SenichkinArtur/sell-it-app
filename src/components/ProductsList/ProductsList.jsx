import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './ProductsList.module.css';
import Product from './Product';


const ProductList = ({ productList, productsMeta, searchValue, errorTrigger, fetchProducts }) => {

    const mapProducts = (productList, searchValue) => {
        return productList.map((item) => {
            return (
                searchValue.length === 0 || (item.theme !== null && item.theme.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                    <Product data={item} key={item.pk} />
                : null
            )
        })
    }

    const handlePageClick = ({ selected }) => {
        let currentPage = selected + 1;
        fetchProducts(currentPage);
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
                <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={productsMeta ? productsMeta.total : 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    subContainerClassName={'pages pagination'}
                    activeClassName={styles.pagination_active}
                    previousClassName={styles.previous}
                    nextClassName={styles.next}
                    disabledClassName={styles.disabled}
                />
            </div>
        </div>
    )
}

export default ProductList;
