import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/pattern.min.css";
import "../css/index.css";
/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row id="space-about">
            <Col sm={12} md={9}>
              <div id="profile-container">
                <h1>Profil</h1>
                <p>
                  Saya adalah seorang siswa kelas 11 jurusan RPL dari SMKN 1
                  Bekasi, Saya memiliki ketertarikan dalam bidang desain
                  antarmuka website dan pengembangan game. Saya cukup menguasai
                  beberapa framework seperti react js dan bootstrap.
                </p>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div id="sosmed-container">
                <Row>
                  <Col xs={4} md={12}>
                    <div id="wrapper">
                      <FontAwesomeIcon icon={faInstagram} />
                      <a href="https://www.instagram.com/erlangga_da/">
                        <p>instagram</p>
                      </a>
                    </div>
                  </Col>
                  <Col xs={4} md={12}>
                    <div id="wrapper">
                      <FontAwesomeIcon icon={faDribbble} />
                      <a href="https://github.com/erlangga-da">
                        <p>Dribbble</p>
                      </a>
                    </div>
                  </Col>
                  <Col xs={4} md={12}>
                    <div id="wrapper">
                      <FontAwesomeIcon icon={faGithub} />
                      <a href="https://dribbble.com/erlangga_da">
                        <p>Github</p>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <hr id="divider" />
        </Container>
      </div>
    );
  }
}
