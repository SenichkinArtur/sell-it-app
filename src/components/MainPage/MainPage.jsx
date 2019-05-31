import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer/Footer';
import Products from '../../containers/Products';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';
import eyeIcon from '../../assets/images/eye.png';

export const MyContext = React.createContext();

const MainPage = () => {
    return(
        <React.Fragment>
            <Header />
            <MyContext.Provider value={eyeIcon}>
                <ErrorBoundary>
                    <Products />
                </ErrorBoundary>
            </MyContext.Provider>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
