import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import ProductsList from "./componets/ProductsList/ProductsList";
import ProductPage from "./componets/ProductsList/ProductPage/ProductPage";
import SignPage from "./componets/SignPage/SignPage";
import UserPage from './componets/UserPage/UserPage';
import NewProduct from './componets/ProductsList/NewProduct/NewProduct';
import NotFound from './componets/Errors/NotFound';
import ServerError from './componets/Errors/ServerError';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from 'react-redux';
import { logger } from './middlewares/logger';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/rootSaga';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import { createBrowserHistory } from 'history';
import httpService from './api_client/interceptors';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(sagas);

if (localStorage.jwtToken) {
    axios.post('http://light-it-04.tk/api/token-verify/', { token: localStorage.jwtToken })
    .then((res) => {
        let user = jwt.decode(res.data.token);
        store.dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
    })
}

const history = createBrowserHistory();
httpService.setupInterceptors(store, history);

const App = () => {
    return (
        <Provider store={store} >
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/"component={ProductsList} />
                        <Route path="/sign-in" render={ () => (<SignPage activeTab={"signin"} />) }/>
                        <Route path="/sign-up" render={ () => (<SignPage activeTab={"signup"} />) }/>
                        <Route path="/products/:productId" render={({ match }) => (<ProductPage productId={Number(match.params.productId)} />)} />
                        <Route path="/userdetails/:userId" render={({ match }) => (<UserPage userId={match.params.userId} />)} />
                        <Route path="/newproduct" component={NewProduct} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/server-error" component={ServerError} />
                    </Switch>
                </Router>
            </div>
        </Provider>
    )
};

export default App;