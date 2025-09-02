import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshil Jain </span>
            from <span className="purple"> Bengaluru, Karnataka.</span>
            <br />
            I am currently pursuing Bachelor of Technology in Computer Science and Engineering at Jain (Deemed-to-be University).
            <br />
            I am a driven Computer Science student proficient in C++, JavaScript, Python with experience building clean, user-focused web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Creative Hobbies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
