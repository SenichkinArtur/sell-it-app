import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from "./componets/ProductsList/ProductsList";
import ProductPage from "./componets/ProductsList/ProductPage/ProductPage";
import SignPage from "./componets/SignPage/SignPage";
import UserPage from './componets/UserPage/UserPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"component={ProductsList} />
                    <Route path="/sign" component={SignPage} />
                    <Route path="/products/:productId" render={({ match }) => (<ProductPage productId={Number(match.params.productId)} />)} />
                    <Route exact path="/userdetails/:userId" render={({ match }) => (<UserPage userId={match.params.userId} />)} />
                </Switch>
            </Router>
        </div>
    )
};

export default App;