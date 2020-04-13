import React from "react";

function Home() {
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

      {/* Practice */}
      {/*

            <h1>
            Hi
            </h1>
            <button onClick={Welcome}>
            button
            </button>
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Steve Jobs</h5>
                <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
                <p class="card-text">Stay Hungry, Stay Foolish</p>
            </div>
            </div>

            */}

      {/* JUMBOTRON */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" id="title">
            Jake Moh
          </h1>
          <p className="lead">Software Developer</p>
        </div>
      </div>

      {/* ICONS */}
      <div className="row">
        <div className="col-2"></div>

        <div className="col-3">
          <svg
            className="bi bi-code-slash"
            width="60%"
            height="60%"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="col-2">
          <svg
            className="bi bi-person-fill"
            width="60%"
            height="60%"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="col-3">
          <svg
            className="bi bi-camera"
            width="60%"
            height="60%"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 014-4v1z" />
            <path
              fillRule="evenodd"
              d="M14.333 3h-2.015A5.97 5.97 0 009 2a5.972 5.972 0 00-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 003.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 100-1 .5.5 0 000 1zM9 13A5 5 0 109 3a5 5 0 000 10z"
              clipRule="evenodd"
            />
            <path d="M2 3a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1z" />
          </svg>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Home;
