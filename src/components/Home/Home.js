import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about.png";
import Particle from "../Particle";

import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
              Hello!{" "}
                
              </h1>

              <h1 className="heading-name">
                My Name 
                <strong className="main-name"> Hassan Abdirahman </strong>
              </h1>
              <div style={{ padding: 0, fontSize: 30, textAlign: "middle" }}>
   
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "600px", maxWidth: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
