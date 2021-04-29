import React, { Component } from "react";

/* css */
import "../css/list.css";
import "../css/headerPattern.css";
/* jsx */
import TittleHeader from "../component/TittleHeader.jsx";
import { ListComponent } from "./ListComponent";

export default class EducateComponent extends Component {
  render() {
    return (
      <div>
        <div id="list-container">
          <TittleHeader judul={"edukasi"}/>
          <ListComponent namaTempat={"(RPL) SMKN 1 Bekasi"} tahun={"2019-Sekarang"}/>
          <ListComponent namaTempat={"SMPN 13 Bekasi"} tahun={"2016-2019"}/>
          <ListComponent namaTempat={"SDN Kota  Baru 10 Bekasi"} tahun={"2010-2016"}/>
        </div>
      </div>
    );
  }
}
