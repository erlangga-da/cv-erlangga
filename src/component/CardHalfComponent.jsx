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
    namaTempat: "(Magang) PT. Brilyan Trimatra Utama, Rawa Lumbu",
    tahun: "2021",
  },
  {
    id: "keahlian",
    namaTempat: "Css",
    tahun: "2 tahun",
  },
  {
    id: "keahlian",
    namaTempat: "React js",
    tahun: "1 bulan",
  },
  {
    id: "keahlian",
    namaTempat: "Bootstrap",
    tahun: "4 bulan",
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
        <h1 className="header-stripe-text">{props.id}</h1>
      </div>

      {/* listdata Mapping & filter */}
      {listdata
        .filter((list) => list.id == props.id)
        .map((list) => (
            <ListComponent namaTempat={list.namaTempat} tahun={list.tahun} />
        ))}
    </div>
  );
};
export default CardHalfComponent;
