import React from "react";

function Contact() {
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
			<h1>Contact</h1>
		</div>
	)
}

export default Contact;
