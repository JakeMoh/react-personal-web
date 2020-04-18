import React, { useState } from "react";
import axios from 'axios';

function About() {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  function sendAPI() {
    axios.post(`http://localhost:8080/setvalue`, { index: number })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setList(list.concat(res.data));
    })
  }

  function getAPI() {
    axios.get(`http://localhost:8080/getvalues`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(list)
    })
  }

  return (
		<div>
			{/* Nav */}
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
			<h1>About</h1>
      <input
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <button onClick={sendAPI}>Post</button>
      <hr />
      <button onClick={getAPI}>Get</button>
		</div>
	)
}

export default About;
