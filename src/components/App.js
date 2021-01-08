import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                {notes.map(noteItem => 
                    <Note 
                    key = {noteItem.id}
                    title = {noteItem.title}
                    content = {noteItem.content}
                    />
                )}
                
                <Footer />
            </div>
        )
    }
}
export default App;