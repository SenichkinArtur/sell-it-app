import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { logger } from './Middlewares/logger';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/products';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk, logger, sagaMiddleware)));
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
