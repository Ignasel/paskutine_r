import React, {Component} from 'react';
import Main from "../main/Main";
import Header from "../header/Header";
import About from "../about/About";
import Product from "../product/Product"
import Nav from "../nav/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import Orders from "../orders/Orders";

function App() {
    return (
        <div className="container">
            <Nav/>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/about>">
                            <About/>
                        </Route>
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/orders/:id" component={Orders}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;