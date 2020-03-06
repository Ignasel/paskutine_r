import React from 'react';
import Product from '../product/Product'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

function Nav() {
    return(
        <div className="nav">
            <nav>
               <a href="/">Home</a>
              <a href="/about">About</a>
                <Router>
                <Route path="/product>">
                    <Product/>
                </Route>
                </Router>
            </nav>
        </div>




    );
}

export default Nav;