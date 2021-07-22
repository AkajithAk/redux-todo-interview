import React from 'react';
import './noteitem.css';
const NoteItem=({title,content,time,onItemClicked})=>{
    return(
        <div className="containernotes">
            <h1>{title}</h1>
            <h2>{content}</h2>
            <h2>{time}</h2>
            <button onClick={onItemClicked} className="update">Update</button>
        </div>
    )
}

export default NoteItem;