import React from "react";
import { Nav, Jumbotron, Container } from 'react-bootstrap';
import "../css/Contact.css"

function Contact() {
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
      <Jumbotron fluid id="contact-jumbotron">
        <Container>
          <h4>
            jakem5531@gmail.com
          </h4>
        </Container>
      </Jumbotron>
		</>
	)
}

export default Contact;
