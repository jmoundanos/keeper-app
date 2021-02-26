import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from"./CreateNote";


class App extends Component {
    function addNote(note){
        console.log(note)
    }
    render(){
        return(
            <div>
                <Header />
                <CreateNote onAdd={addNote}/>
                <Note 
                    key={1}
                    title="Note title"
                    content="Content"
                    />
                <Footer />
            </div>
        )
    }
}
export default App;