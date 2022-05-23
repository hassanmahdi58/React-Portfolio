import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import tech from "../../Assets/Projects/tech.png";
import editorapp from "../../Assets/Projects/codeEditor.png";
import noteapp from "../../Assets/Projects/note-app.png";
import dayplanner from "../../Assets/Projects/dayplanner.gif";
import cityhealth from "../../Assets/Projects/cityhealth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteapp}
              
              title="Note-App"
              description="This is note application where you create a post see any comments , who made the comment and also you can delete any post "
              link="https://github.com/hassanmahdi58/Note-express"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cityhealth}
              isBlog={true}
              title="City Health in GB"
              description="This is City health application , you can search a place you want to know the current covid-19 and air quality statistics."
              link="https://github.com/hassanmahdi58/city-health" 
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editorapp}
              isBlog={true}
              title="Text Editor"
              description="Online Text Editor application where also you can download to your local machine as App"
              link="https://github.com/hassanmahdi58/Text-Editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E Commerce backened"
              description="This is E Commerce Backened where you can add products , price products , description and tags for the products also you can delete the products and save in the database storage "
              link="https://github.com/hassanmahdi58/E-Commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dayplanner}
              isBlog={false}
              title="Day Planner App"
              description="In this App created for the very busy scheduele people to save notes both mobile and computer"
              link="https://github.com/hassanmahdi58/Day-Planer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Blog Post "
              description="This is blog post , Simple you can create blog post and give access the users to comment any blog post you created , also you can have access to delete your own post if you dont want the users to see it ."
              link="https://github.com/hassanmahdi58/blogpost"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
