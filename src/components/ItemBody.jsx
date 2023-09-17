import React from "react";

function ItemBody({note}){
    const getDate = new Date(note.createdAt);
    const date = getDate.getDate();
    const getDay = getDate.getDay();
    const getMonth = getDate.getMonth();
    const year = getDate.getFullYear();
    const dayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
    const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = dayName[getDay];
    const month = monthName[getMonth]
    return(
        <div className="note-item__content">
            <div className="note-item__title">{note.title}</div>
            <div className="note-item__date">{day}, {date} {month} {year}</div>
            <div className="note-item__body">{note.body}</div>
        </div>
    )
}

export default ItemBody;