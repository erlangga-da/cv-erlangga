import React from "react";

/* css */
import "../css/list.css";
import "../css/headerPattern.css";

/* jsx */
import { ListComponent } from "../component/ListComponent";

const listdata = [
  {
    id: "pendidikan",
    namaTempat: "(RPL) SMKN 1 Bekasi",
    tahun: "2019-Sekarang",
  },
  {
    id: "pendidikan",
    namaTempat: "SMPN 13 Bekasi",
    tahun: "2016-2019",
  },
  {
    id: "pendidikan",
    namaTempat: "SDN Kota  Baru 10 Bekasi",
    tahun: "2010-2016",
  },
  {
    id: "pengalaman",
    judul: "praktik kerja industri",
    namaTempat: "PT. Brilyan Trimatra Utama",
    tahun: "Apr 2021 - Sep 2021",
    multiVal: true,
    todo: [
      "Membuat Fron-End Portal web PEPARNAS XVI",
      "Membuat Front-End login page PON XX",
      "Membuat Halaman web PON XX",
    ],
  },
  {
    id: "pengalaman",
    judul: "quality control",
    namaTempat: "PT. HILOTECT KARYA ANAK INDONESIA",
    tahun: "Des 2021 - Jan 2022",
    multiVal: false,
    todo: [
      "Membantu menyelesaikan Quality Control pada suatu proyek website dan memperbaiki revisi sistem pada bagian front-end website",
    ],
  },
  {
    id: "keahlian",
    namaTempat: "HTML,CSS",
  },
  {
    id: "keahlian",
    namaTempat: "JavaScript",
  },
  {
    id: "keahlian",
    namaTempat: "React js",
  },
  {
    id: "keahlian",
    namaTempat: "Node js",
  },
  {
    id: "keahlian",
    namaTempat: "Mongo DB",
  },
  {
    id: "keahlian",
    namaTempat: "Code Igniter 4",
  },
  {
    id: "keahlian",
    namaTempat: "SQL",
  },
];

const CardHalfComponent = (props) => {
  return (
    <div>
      {/* judul */}
      <div
        className="pattern-diagonal-lines-sm yellow max-w-pc"
        id="header-stripe"
      >
        <h1 className={"header-stripe-text " + props.id}>{props.id}</h1>
      </div>
      {/* listdata Mapping & filter */}
      {listdata
        .filter((list) => list.id == props.id)
        .map((list, index) => {
          if (props.pengalaman) {
            return (
              <ListComponent
                id="pengalaman"
                key={index}
                judul={list.judul}
                multiVal={list.multiVal}
                todo={list.todo}
                namaTempat={list.namaTempat}
                tahun={list.tahun}
              />
            );
          } else {
            return (
              <ListComponent
                id={props.id}
                key={index}
                namaTempat={list.namaTempat}
                tahun={list.tahun}
              />
            );
          }
        })}
    </div>
  );
};
export default CardHalfComponent;
