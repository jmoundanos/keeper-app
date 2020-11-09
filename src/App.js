import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./style.css";

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}