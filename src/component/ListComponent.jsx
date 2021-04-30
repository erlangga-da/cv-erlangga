import React from "react";

/* css */
import "../css/list.css";

/* jsx */
import Fade from "react-reveal/Fade";

export const ListComponent = (props) => {
  return (
    <Fade bottom>
      <div id="list-data">
        <span>{props.tahun}</span>
        <h3>{props.namaTempat}</h3>
      </div>
    </Fade>
  );
};
