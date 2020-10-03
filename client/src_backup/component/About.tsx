import React from "react";
import { Nav, Jumbotron, Container } from 'react-bootstrap';
import "../css/About.css"

function About() {
  return (
		<>
			{/* Nav */}
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
			<Jumbotron fluid id="about-jumbotron">
        <Container>
          <h4 className="quote">
            “Remembering that you are going to die is the best way I know to avoid the trap of 
            thinking you have something to lose. You are already naked. There is no reason not to 
            follow your heart.”
          </h4>
          <h4 className="quote">
            ― Steve Jobs
          </h4>
          <p id="about-me">

          My name is Jake Moh, and I am a third-year Computer Science student at The University of
          British Columbia. Currently, I am working as a software developer at SAP, Vancouver.
          Furthermore, I am apart of the coding team at The Visual Cognition Lab in UBC, where I help
          my team of ten members develop and maintain Javascript frameworks that are used for
          conducting visualization experiments. During my studies, I learned about Software 
          Construction, Algorithms and Data Structures, Computer Systems, Software Engineering, 
          Relational Databases.

          </p>
          <br/>
          <p>
          This Computer Science degree is not my first degree, as I hold a Bachelor of Science in Human
          Biology and Animal Physiology from The University of Toronto. During my first degree, I
          realized that Biology was not my passion, as I am a person who finds joy in tackling and solving
          complex problems, thus I could not find great meaning in my life during my studies in Toronto.
          Therefore, I decided to try programming and computer science and upon the completion of my
          first project of designing a simple python calculator, I immediately fell in love and realized my
          passion for Computer Science. At first, I was very hesitant about coming to Vancouver because I
          had to leave family and friends, however, I decided to follow my passions and it turned out to be
          the best decision of my life. I believe that the best job, is the job that you love, because then it
          would not feel like a job anymore, but a passion.
          </p>
        </Container>
      </Jumbotron>
		</>
	)
}

export default About;
