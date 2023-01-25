import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/img/cody.png";

export default function Resume() {
  return (
    <Container>
      <h2 className="title">About Cody</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
           <p>a full stack developer aisjdlakjdlkajdlkad</p>
           <ul>
            <li>MongoDB</li>
            <li>REACT</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>NodeJS</li>
            <li>Mongoose</li>
           </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}