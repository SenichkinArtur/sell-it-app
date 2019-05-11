import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware, createStore } from "redux";
// import reducers from "./reducers/index";
// import { Provider } from 'react-redux';
// import { logger } from './middlewares/logger';
// import createSagaMiddleware from 'redux-saga'
// import sagas from './sagas/rootSaga';
// import axios from 'axios';
// import jwt from 'jsonwebtoken';



// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
// sagaMiddleware.run(sagas);



// if (localStorage.jwtToken) {
//     axios.post('http://light-it-04.tk/api/token-verify/', { token: localStorage.jwtToken })
//     .then((res) => {
//         let user = jwt.decode(res.data.token);
//         store.dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
//     })
// }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
