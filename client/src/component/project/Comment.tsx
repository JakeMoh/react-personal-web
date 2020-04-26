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
