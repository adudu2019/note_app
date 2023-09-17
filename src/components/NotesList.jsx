import React from "react";
import NotesItem from "./NotesItem";

function NotesList ({notes, onDelete, activeData}){
    console.log(typeof activeData);
    return(
        <div className="notes-list">
            {
                activeData.length === 0 ?
                <p className="kosong">Tidak ada catatan</p>
                :
                activeData.map((notes) => (
                    <NotesItem
                    key={notes.id} 
                    note={notes}
                    id={notes.id}
                    onDelete={onDelete}/>
                ))
            }
        </div>
    )
}

export default NotesList;