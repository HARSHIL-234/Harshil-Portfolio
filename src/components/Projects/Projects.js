import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Medical Agent - AI Symptom Tool"
              description="Built an AI-driven Streamlit app to suggest medical advice based on symptoms using generative AI. Fetched real-time pharmacy and health data through web scraping (BeautifulSoup) and DuckDuckGo. Designed a responsive UI with fast loading and retry logic for API reliability."
              ghLink="https://github.com/HARSHIL-234/medical-agent"
              demoLink="https://harshil-medical-agent.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Traffic Management System"
              description="Designed to address the inefficiency of manual traffic record-keeping by providing a digital solution for managing vehicle and challan data. Developed a console-based traffic management simulation with timestamp logging using C++."
              ghLink="https://github.com/HARSHIL-234/smart-traffic-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Money Tracker Web App"
              description="Built a Money Tracker web app to help users efficiently record, categorize, and analyze daily expenses. Developed using HTML5, CSS3, and JavaScript with dynamic DOM manipulation. Implemented CSV export functionality and integrated MongoDB for data persistence."
              ghLink="https://github.com/HARSHIL-234/money-tracker"
              demoLink="https://harshil-money-tracker.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tic-Tac-Toe Game"
              description="Interactive Tic-Tac-Toe game built with C++ featuring intelligent AI opponent, score tracking, and clean console interface. Implements minimax algorithm for optimal AI moves and provides engaging gameplay experience."
              ghLink="https://github.com/HARSHIL-234/Tic-Tac-Toe-Game-using-Cpp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Modern and responsive personal portfolio website built with React.js showcasing projects, skills, and achievements. Features smooth animations, responsive design, and optimized performance for all devices."
              ghLink="https://github.com/HARSHIL-234/basic-personal-portfolio"
              demoLink="https://harshil-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DSA Problem Solutions"
              description="Collection of 100+ Data Structures and Algorithms solutions on LeetCode demonstrating strong problem-solving skills. Implemented efficient algorithms in C++, Python, and Java with detailed explanations and optimized time complexity."
              ghLink="https://github.com/HARSHIL-234/DSA-Solutions"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
