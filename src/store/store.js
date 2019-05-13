import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history';

import httpService from '../api_client/interceptors';
import reducers from "../reducers/index";
import { logger } from '../middlewares/logger';
import sagas from '../sagas';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(sagas);

export const history = createBrowserHistory();
httpService.setupInterceptors(store, history);
