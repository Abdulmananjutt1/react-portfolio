import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  // Function to handle demo click
  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Demo not available right now, you can check through GitHub");
    }
  };

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
              title="Doctor Appointment System"
              description="The Doctor Appointment System is a React Native app where patients can search and book doctors, and doctors can manage schedules and appointments. Users can register, book, reschedule, and give feedback, while doctors can set availability and update statuses. The admin panel handles user, doctor, and appointment management with reports and settings."
              ghLink="https://github.com/Abdulmananjutt1/doctor_appointment_system_react_native"
              demoClick={() =>
                handleDemoClick("https://chatify-49.web.app/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car Rental System"
              description="The Car Rental System is a React Native app that lets users browse, book, and manage rental cars, while admins handle listings, bookings, and analytics. Users can register, search cars by filters, view details, book with a rental period, make payments and give feedback. Admins can manage cars, update availability, track cars in real-time, apply discounts, and view reports — making the rental process fast, organized, and user-friendly."
              ghLink="https://github.com/Abdulmananjutt1/car_rental_system"
              demoClick={() =>
                handleDemoClick("https://blogs.soumya-jit.tech/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hosital Management System"
              description="The Hospital Management System is a system  where patients can book appointments, view records, and get notifications; doctors can manage schedules, patient details, and treatments; nurses can update patient vitals, assist in treatments, and manage ward details; and admins handle doctors, nurses, patients, appointments, and reports for smooth hospital operations."
              ghLink="https://github.com/Abdulmananjutt1/hospital_management_system"
              demoClick={() =>
                handleDemoClick("https://editor.soumya-jit.tech/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sentiment Analysis"
              description="The Sentiment Analysis System uses a trained machine learning model to analyze text or feedback and classify it as positive, negative, or neutral. It helps in understanding customer opinions, tracking sentiment trends, and generating reports for informed decision-making."
              ghLink="https://github.com/Abdulmananjutt1/sentiment_analysis"
              demoClick={() =>
                handleDemoClick("https://plant49-ai.herokuapp.com/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai Search Algorithms"
              description="A browser-based project built with HTML, CSS, and JavaScript that visualizes graph/grid search. Users choose start/goal, draw obstacles, and run BFS, DFS, or Uniform Cost Search to see step-by-step traversal, frontier (queue/stack/priority queue), final path highlight, total cost, and basic time/space stats. Supports custom edge weights, reset/clear, and export of results/screenshots for reports."
              ghLink="https://github.com/Abdulmananjutt1/artificial-intelligence-searching-algorithms"
              demoClick={() => handleDemoClick(null)} // No link -> show alert
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Loan Application"
              description="The Loan Application System allows users to apply for loans, upload required documents, and track application status, while admins review applications, verify details, approve or reject requests, and manage repayment records — making the loan process faster and more organized."
              ghLink="https://github.com/Abdulmananjutt1/loan-calculator-app"
              demoClick={() => handleDemoClick(null)} // No link -> show alert
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
