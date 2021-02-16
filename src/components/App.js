import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateNote from "./CreateNote";

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <CreateNote />
                <Note 
                    key={1}
                    title="Note title"
                    content="Content"
                <Footer />
            </div>
        )
    }
}
export default App;