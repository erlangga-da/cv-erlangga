import React from "react";
import { Card } from "react-bootstrap";
import "../css/index.css";

const CardComponent = (props) => {
  return (
    <div>
      <Card>
        {/* Foto sekolah disini */}
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
          {/* Tahun ajaran*/}
          <Card.Text>{props.TahunAjaran}</Card.Text>
          {/* Nama sekolah*/}
          <Card.Title>{props.NamaSekolah}</Card.Title>
          {/* Alamat sekolah */}
          <Card.Subtitle className="mb-2 text-muted">{props.Alamat}</Card.Subtitle>
          {/* Jurusan */}
          <Card.Text>{props.Jurusan}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
