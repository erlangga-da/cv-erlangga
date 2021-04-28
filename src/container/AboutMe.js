import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/index.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div id="img-container">
                <img />
              </div>
            </Col>
            <Col sm={12} md={8}>
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
