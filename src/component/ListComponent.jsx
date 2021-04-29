import React from 'react';
import "../css/list.css";

export const ListComponent = (props) => {
    return (
        <div id="list-data">
            <span>{props.tahun}</span>
             <h3>{props.namaTempat}</h3>
        </div>
    )
}
