import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductList from '../ProductsList/ProductsList';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';

const MainPage = () => {
    return(
        <React.Fragment>
            <Header />
            <ErrorBoundary>
                <ProductList />
            </ErrorBoundary>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
