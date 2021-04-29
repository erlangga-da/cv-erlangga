import React, { Component } from "react";
import { ListComponent } from "./ListComponent";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ExperienceComponent extends Component {
  render() {
    return (
      <div>
        <div id="list-container">
          <h1>pengalaman</h1>
          <ListComponent namaTempat={"PT. Brilyan Trimatra Utama, Rawa Lumbu"} tahun={"2021"} />  
        </div>
      </div>
    );
  }
}
