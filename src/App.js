import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from "./componets/Products/Products";
import SignPage from "./componets/SignPage/SignPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/" component={Products} />
                    <Route path="/Sign" component={SignPage} />
                </div>
            </Router>
        </div>
    );
}

export default App;
