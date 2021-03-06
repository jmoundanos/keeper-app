import React, { useState } from "react";



function CreateNote(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
    const { name, value } = event.target;
    setNote(prevNote =>{
        return{
            ...prevNote,
            [name]: value
        };
    });
    }
    function addNote(event){
        event.preventDefault();
        props.onAdd(note);
    }
    return (
        <div>
            <form>
            <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note" />
            <button onClick={addNote}>Add</button>
            </form>
        </div>
    );
}
export default CreateNote;