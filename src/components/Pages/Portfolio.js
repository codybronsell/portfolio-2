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
        <section id="work">
    <div class="flex-row gutter-md">
      <div class="flex-3">
        <h2 class="section-title primary-border"> Work </h2>
      </div>
      <div class="flex-9 projects border-primary-left-lg">
        <div class="flex-row">
          <div class="flex-12 ">
            <a href="https://codybronsell.github.io/run-buddy/" class="proj bg-1">
              <div class="info-box">
                <h3>Run Buddy</h3>
                <p>HTML/CSS</p>
              </div>
            </a>
          </div>
        </div>
        <div class="flex-row">
          <div class="flex-6">
            <a href="https://codybronsell.github.io/challenge-1/" class="proj bg-2">
              <div class="info-box">
                <h3>Refactor</h3>
                <p>Accessibility</p>
              </div>
            </a>
          </div>
          <div class="flex-6">
            <a href="https://deadseal001.github.io/movie-search-app/" class="proj bg-3">
              <div class="info-box">
                <h3>Movie app</h3>
                <p>Tailwind css</p>
              </div>
            </a>
          </div>
        </div>
        <div class="flex-row">
          <div class="flex-6">
            <a href="https://codybronsell.github.io/portfolio/" class="proj bg-4">
              <div class="info-box">
                <h3>parts tracker app</h3>
                <p>frontend</p>
              </div>
            </a>
          </div>
          <div class="flex-6">
            <a href="#" class="proj bg-5">
              <div class="info-box">
                <h3>NEW</h3>
                <p>In Progress</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Col>
      </Row>
    </Container>
  );
}