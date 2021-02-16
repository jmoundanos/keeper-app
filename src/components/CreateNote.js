import React from "react";

function CreateNote(){
    return (
        <div>
            <form>
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note" />
            <button>Add</button>
            </form>
        </div>
    );
}
export default CreateNote;