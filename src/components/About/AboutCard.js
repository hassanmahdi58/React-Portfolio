import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
       
          <p style={{ textAlign: "justify middle", fontSize : 25}}>
            Hi Everyone, I am <span className="purple">Hassan Abdirahman</span>
           
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
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
