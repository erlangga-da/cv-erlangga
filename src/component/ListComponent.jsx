import React from "react";

/* css */
import "../css/list.css";

/* jsx */
import Fade from "react-reveal/Fade";

export const ListComponent = (props) => {
  if (props.id === "pengalaman") {
    return (
      <Fade bottom>
        <div id="list-data" className="pengalaman">
          <h4>{props.judul}</h4>
          <span>{props.namaTempat + " | " + props.tahun}</span>
          <ul className={props.multiVal ? "" : "hide"}>
            {props.todo.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <p className={props.multiVal ? "hide" : ""}>{props.todo}</p>
        </div>
      </Fade>
    );
  } else {
    return (
      <Fade bottom>
        <div id="list-data" className={props.id}>
          <span>{props.tahun}</span>
          <h3>{props.namaTempat}</h3>
        </div>
      </Fade>
    );
  }
};