import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { logger } from './middlewares/logger';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/rootSaga';
import axios from 'axios';
import jwt from 'jsonwebtoken';

// import createHistory from 'history/createBrowserHistory';
// import httpService from './api_client/interceptors';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(sagas);

// const history = createHistory();
// httpService.setupInterceptors(store, history);

if (localStorage.jwtToken) {
    axios.post('http://light-it-04.tk/api/token-verify/', { token: localStorage.jwtToken })
    .then((res) => {
        let user = jwt.decode(res.data.token);
        store.dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
    })
}

ReactDOM.render(
    <Provider store={store}>
        {/* <Router history={history}> */}
            <App/>
        {/* </Router> */}
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
