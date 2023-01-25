import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/img/cody.png";

export default function About() {
  return (
    <Container>
      <h2 className="title">About Cody</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>My name is cody Bronsell. I am a student in the Rice Computer Codeing Bootcamp. My love figureing out how things work and fixing or improving them. One hobby of mine outside of coding is working on cars. Im currently working on my own 2018 Mustang.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}