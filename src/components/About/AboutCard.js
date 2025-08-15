import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdulmanan </span>
            from <span className="purple"> Gujranwala, Pakistan.</span>
            <br />
            I have done Software Engineer from Gift University Gujranwala.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose; create solutions that uplift lives!."{" "}
          </p>
          <footer className="blockquote-footer">Abdulmanan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
