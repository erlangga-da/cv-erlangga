import React, { Component } from "react";
import { ListComponent } from "./ListComponent";
import "../css/list.css";

export default class EducateComponent extends Component {
  render() {
    return (
      <div>
        <div id="list-container">
          <h1>edukasi</h1>
          <ListComponent namaTempat={"(RPL) SMKN 1 Bekasi"} tahun={"2019-Sekarang"}/>
          <ListComponent namaTempat={"SMPN 13 Bekasi"} tahun={"2016-2019"}/>
          <ListComponent namaTempat={"SDN Kota  Baru 10 Bekasi"} tahun={"2010-2016"}/>
        </div>
      </div>
    );
  }
}
