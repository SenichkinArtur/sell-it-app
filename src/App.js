import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Routes from './routes/routes';
import { store, history } from './store/store';

if (localStorage.jwtToken) {
    axios.post('http://light-it-04.tk/api/token-verify/', { token: localStorage.jwtToken })
    .then((res) => {
        let user = jwt.decode(res.data.token);
        store.dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
    })
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