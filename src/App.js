import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from "./componets/Products/Products";
import Sign from "./componets/Sign/Sign";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/" component={Products} />
                    <Route path="/Sign" component={Sign} />
                </div>
            </Router>
        </div>
    );
}

export default App;
