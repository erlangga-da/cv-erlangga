import React, { Component } from "react";

/* css */
import { Container, Row, Col } from "react-bootstrap";
import "../css/pattern.min.css";
import "../css/index.css";
import "../css/headerPattern.css";

/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";

/* jsx */
import TittleHeader from "../component/TittleHeader.jsx";
import Fade from "react-reveal/Fade";

const sosmed = [
  {
    link: "mailto:erlanggamuhammad94@gmail.com",
    icon: faAt,
    label: "Mail",
  },
  {
    link: "https://dribbble.com/erlangga_da",
    icon: faDribbble,
    label: "Dribbble",
  },
  {
    link: "https://github.com/erlangga-da",
    icon: faGithub,
    label: "Github",
  },
];

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row id="space-about">
            <Col sm={12} md={9}>
              <Fade bottom cascade>
                <div id="profile-container">
                    <TittleHeader judul={"profil"} />
                  <p>
                    Saya adalah seorang siswa kelas 11 jurusan RPL dari SMKN 1
                    Bekasi, Saya memiliki ketertarikan dalam bidang desain
                    antarmuka website dan pengembangan game. Saya cukup
                    menguasai beberapa framework seperti react js dan bootstrap.
                  </p>
                </div>
              </Fade>
            </Col>
            <Col sm={12} md={3}>
              <div id="sosmed-container">
                <Row>
                  {sosmed.map((socials) => (
                    <Col xs={4} md={12}>
                      <Fade bottom cascade>
                        <div id="wrapper">
                          <a href={socials.link}>
                            <FontAwesomeIcon id="icon" icon={socials.icon} />
                            <p>{socials.label}</p>
                          </a>
                        </div>
                      </Fade>
                    </Col>
                  ))}
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
