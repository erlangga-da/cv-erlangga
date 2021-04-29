import React, { Component } from "react";

/* icons */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* jsx */
import TittleHeader from "../component/TittleHeader.jsx";
import { ListComponent } from "./ListComponent";

export default class ExperienceComponent extends Component {
  render() {
    return (
      <div>
        <div id="list-container">
          <TittleHeader judul={"pengalaman"}/>
          <ListComponent namaTempat={"(Magang) PT. Brilyan Trimatra Utama, Rawa Lumbu"} tahun={"2021"} />  
        </div>
      </div>
    );
  }
}
