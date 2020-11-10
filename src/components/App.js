import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Note />
                <Footer />
            </div>
        )
    }
}
export default App;