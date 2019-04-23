import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from "./componets/Products/Products";
import Sign from "./componets/Sign/Sign";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            {/* <Products /> */}
            {/* <Sign /> */}
            <Router>
                <div>
                    <Route exact path="/" render={ () => <Products />} />
                    <Route path="/Sign" render={ () => <Sign /> } />
                </div>
            </Router>
        </div>
    );
}

export default App;
