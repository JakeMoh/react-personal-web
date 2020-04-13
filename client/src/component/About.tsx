import React from "react";

function About() {
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
		</div>
	)
}

export default About;
