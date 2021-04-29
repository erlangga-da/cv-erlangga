import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducateComponent from "../component/EducateComponent";
import ExperienceComponent from "../component/ExperienceComponent";

export default class ExpAndEduContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-0">
            <Col sm={12} md={6}>
              <EducateComponent />
            </Col> 
            <Col sm={12} md={6}>
              <ExperienceComponent />
            </Col>
          </Row>
          <hr
            style={{ borderWidth: 2 + "px", marginTop: 3.3 + "rem" }}
            id="divider"
          />
        </Container>
      </div>
    );
  }
}
