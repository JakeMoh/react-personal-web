import React from "react";
import { Nav, Card, Button, Container, Row, Col } from 'react-bootstrap';


function Project() {
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
      <Container fluid>
        <h1>Projects</h1>
        <Row>
          <Col md={4} sm={6}>
            <Card>
              <svg className="bi bi-chat-dots" width="100%" height="100%" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z" clipRule="evenodd"/>
                  <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>
              <Card.Body>
                <Card.Title>Leave Comment</Card.Title>
                <Card.Text>
                  Leave comment for anyone to see!
                </Card.Text>
                <Button variant="primary" href="/project/comment">View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
		</>
	)
}

export default Project;
