import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Routes from './routes/routes';
import { store, history } from './store/store';

if (localStorage.jwtToken) {
    axios.post('http://light-it-04.tk/api/token-verify/', { token: localStorage.jwtToken })
    .then(() => {
        store.dispatch({type: 'USER_LOGIN_SUCCESS' });
        store.dispatch({type: 'USER_INFO_REQUEST' });
    })
    .catch(() => {
        store.dispatch({type: 'USER_LOGOUT'});
    });
}

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Router history={history}>
                    <Routes />
                </Router>
            </div>
        </Provider>
    )
};

export default App;
