import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer/Footer';
import Products from '../../containers/Products';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';

const MainPage = () => {
    return(
        <React.Fragment>
            <Header />
            <ErrorBoundary>
                <Products />
            </ErrorBoundary>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
