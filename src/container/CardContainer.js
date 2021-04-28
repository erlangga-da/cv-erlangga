import React, { Component } from "react";
import Smk from "../img/smk.jpg";
import Smp from "../img/smp.jpg";
import CardComponent from "../component/CardComponent";
import { Container, Row, Col } from "react-bootstrap";

class CardContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <CardComponent
                TahunAjaran="2020"
                NamaSekolah="SMK 1"
                Alamat="Bintara 8"
                Jurusan="RPL"
                img={Smk}
              />
            </Col>
            <Col>
              <CardComponent
                TahunAjaran="2020"
                NamaSekolah="SMK 1"
                Alamat="Bintara 8"
                Jurusan="RPL"
                img={Smp}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardContainer;
