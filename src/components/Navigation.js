import React from "react";
import Nav from "react-bootstrap/Nav";
export default function Navigation(props) {
  const { setCurrentPage } = props;
  return (
    <Nav className="pages">
      {}
      <Nav.Link
        className="page"
        href="#about"
        onClick={() => {
          setCurrentPage("About");
        }}
      >
        About Me
      </Nav.Link>
      <Nav.Link
        className="page"
        href="#portfolio"
        onClick={() => {
          setCurrentPage("Portfolio");
        }}
      >
        My Projects
      </Nav.Link>
      <Nav.Link
        className="page"
        href="#contact"
        onClick={() => {
          setCurrentPage("Contact");
        }}
      >
        Contact Me
      </Nav.Link>
      <Nav.Link
        className="page"
        href="#resume"
        onClick={() => {
          setCurrentPage("Resume");
        }}
      >
        My Resume
      </Nav.Link>
    </Nav>
  );
}

