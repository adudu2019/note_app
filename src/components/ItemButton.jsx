import React from "react";

function ItemButton({id, onDelete}){
    return(
        <div className="note-item__action">
            <div className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</div>
            <div className="note-item__archive-button">Arcive</div>
        </div>
    )
}

export default ItemButton;