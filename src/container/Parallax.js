import React, { Component } from "react";

/* css */
import "../css/parallax.css";

/* icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Parallax extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>Curriculum Vitae</h2>
        </div>
        <a href="#link-section">
          <FontAwesomeIcon className="arrowBounce" icon={faArrowDown} />
        </a>
      </div>
    );
  }
}

export default Parallax;
