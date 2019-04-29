import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductsList from "./componets/ProductsList/ProductsList";
import SignPage from "./componets/SignPage/SignPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/" component={ProductsList} />
                    <Route path="/Sign" component={SignPage} />
                </div>
            </Router>
        </div>
    );
}

export default App;
