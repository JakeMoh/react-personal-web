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
            I am a 3rd year student at University of British Columbia majoring in 
            Computer Science and I am currently working as an software developer intern at SAP 
            located in downtown Vancouver.

            Also, as a part of the coding team in Visual Cognition Lab at UBC, I help my 
            team of 10 members to develop and maintain javascript framework used for 
            conducting visualization experiments.

            During my study I have taken courses such as Software Construction, 
            Algorithms and Data Structures, Computer Systems, Software Engineering, 
            Relational Databases.
          </p>
          <br/>
          <p>
            This degree is not my first degree. I hold Bachelor of Science in human biology and 
            animal physiology from University of Toronto. 
            
            During my time, I had this feeling of unbelonging. 
            
            As I am a person who finds joy in tackling complex problems and solving them, I 
            couldn't find a great meaning in my life during my study.
            
            Therefore, I decided to try what programming and computer science is like and my 
            first project was making a simple python calculator and I immediately feel in love 
            with it. 
            
            Honestly, I was very hesitant to come to Vancouver leaving all my friends and 
            family behind, but I decided to follow my passion and it turns out to be the best 
            decision I made in my life.

            I believe best job is the job you love because by then, it wouldn't feel like a job anymore.
          </p>
        </Container>
      </Jumbotron>
		</>
	)
}

export default About;
