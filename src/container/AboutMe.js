import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from"../img/pp.jpg"
import "../css/index.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12} md={5}>
              <div id="img-container">
                <div id="img"></div>
              </div>
            </Col>
            <Col sm={12} md={7}>
              <div id="text-container">
                <h2>Muhammad</h2>
                <h1>Erlangga</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
