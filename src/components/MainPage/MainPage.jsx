import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from '../Footer/Footer';
import Products from '../../containers/Products';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';
import eyeIcon from '../../assets/images/eye.png';
import styles from './MainPage.module.css';

export const MyContext = React.createContext();

const MainPage = () => {
    return(
        <React.Fragment>
            <Header />
            <MyContext.Provider value={eyeIcon}>
                <ErrorBoundary>
                    <Link
                        to='manage-products'
                        className={styles.manage_products}
                    >
                        <button>Manage Products</button>
                    </Link>
                    <Products />
                </ErrorBoundary>
            </MyContext.Provider>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
