import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductsList from "./componets/ProductsList/ProductsList";
import ProductPage from "./componets/ProductsList/ProductPage/ProductPage";
import SignPage from "./componets/SignPage/SignPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/"component={ProductsList} />
                    <Route path="/Sign" component={SignPage} />
                    <Route path="/products/:productId" render={({ match }) => (<ProductPage productId={Number(match.params.productId)} />)} />
                </div>
            </Router>
        </div>
    )
};

export default App;