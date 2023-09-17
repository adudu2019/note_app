import React from "react";
import ItemBody from "./ItemBody";
import ItemButton from "./ItemButton";

function NotesItem ({note, onDelete, id}){
    return(
        <div className="note-item">
            <ItemBody note={note}/>
            <ItemButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NotesItem;