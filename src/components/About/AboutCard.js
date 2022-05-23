import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
       
          <p style={{ textAlign: "justify middle", fontSize : 25}}>
            Hi Everyone, I am <span className="purple">Hassan Abdirahman</span>
           
            <br />I am a junior Full Stack Developer 
            <br />
            <br />
            Apart from coding, am photographer and graphic designer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
