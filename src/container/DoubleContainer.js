import React, { Component } from "react";

/* css */
import { Container, Row, Col } from "react-bootstrap";

/* jsx */
import CardHalfComponent from "../component/CardHalfComponent";

export default class DoubleContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-54">
            <Col sm={12} md={6}>
              <CardHalfComponent id={"pendidikan"} />
            </Col>
            <Col sm={12} md={6}>
              <CardHalfComponent id={"pengalaman"} />
            </Col>
          </Row>
          <hr id="divider" />
        </Container>

        <Container>
          <Row className="mt-54">
            <Col sm={12} md={6}>
              <CardHalfComponent id={"keahlian"} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
