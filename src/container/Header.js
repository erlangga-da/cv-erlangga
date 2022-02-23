import React, { Component } from "react";

/* css */
import { Container, Row, Col } from "react-bootstrap";
import "../css/pattern.min.css";
import "../css/index.css";

/* jsx */
import Fade from "react-reveal/Fade";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div id="link-section"></div>
        <Container>
          <Row id="header-row">
            <Col className="hide" sm={12} lg={10}>
              <Fade bottom cascade>
                <div id="text-container">
                  <h1>muhammad</h1>
                  <h1>erlangga</h1>
                  <h1>darmawan</h1>
                  <p>Rekayasa Perangkat Lunak</p>
                </div>
              </Fade>
            </Col>
            <Col sm={12} lg={2}>
              <div id="img-container">
                <div id="img-wrapper" className="pattern-dots-md gray-light">
                  <div id="img"></div>
                </div>
              </div>
            </Col>
          </Row>
          <hr id="divider" />
        </Container>
      </div>
    );
  }
}
