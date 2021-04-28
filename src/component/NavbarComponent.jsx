import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" onClick={this.scrollToTop}>
            erlangga.da
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#link">About me</Nav.Link>
              <Nav.Link href="#link">Education</Nav.Link>
              <Nav.Link href="#link">Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
