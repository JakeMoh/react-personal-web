import React, { useState, useEffect } from "react";
import { Nav, Form, Button, Container, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import '../../css/Comment.css';

interface CommentInfo {
  name: string;
  comment: string;
}

interface UserInfo {
  user_id: number;
  name: string;
  comment: string;
}

function Comment() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [nameComment, setNameComment] = useState<UserInfo[]>([]);

  async function updateComment() {
    let jsonBody: CommentInfo = {name, comment}
    axios.post(`/api/users`, jsonBody)
      .then(res => {
        // console.log("POST");
        // console.log(res.data);
        axios.get(`/api/users`)
          .then(res => {
            // console.log("GET");
            // console.log(res.data);
            setNameComment(res.data);
        })
    })
  }

  useEffect(() => {
    axios.get(`/api/users`)
          .then(res => {
            // console.log("GET");
            // console.log(res.data);
            setNameComment(res.data);
        })
  }, []);


  
  function renderNameComment() {
    let arr: any[] =[];

    for (const row of nameComment) {
      arr.push(
        <tr key={row.user_id}>
          <td className="comment-table-box">{row.name}</td>
          <td className="comment-table-box">{row.comment}</td>
          <td className="trash-button">
            <Button variant="danger">
              <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"/>
              </svg>
            </Button>
          </td>
        </tr>
      )
    }
    
    return arr;
  }

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
        <h1>Comment Here!!</h1>
        <hr />
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Name" onChange={(event: any) => setName(String(event.target.value))}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGroupPassword">
              <Form.Label>Comment</Form.Label>
              <Form.Control placeholder="Enter Comment"  onChange={(event: any) => setComment(String(event.target.value))}/>
            </Form.Group>
          </Form.Row>
          <Button onClick={() => {updateComment()}}>Submit</Button>
        </Form>
      </Container>
      {/* {console.log(name)}
      {console.log(comment)} */}
      <Container fluid>
      <h3>Comments</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="comment-table-box">Name</th>
            <th className="comment-table-box">Comment</th>
            <th className="trash-button"></th>
          </tr>
        </thead>
        <tbody>
          {renderNameComment()}
        </tbody>
      </Table>
      </Container>
		</>
	)
}

export default Comment;
