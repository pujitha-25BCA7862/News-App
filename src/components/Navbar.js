import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={{color: props.mode.color,backgroundColor:props.mode.background}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color: props.mode.color}}>
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  aria-current="page"
                  to="/"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/business"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/entertainment"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/health"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/science"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/sports"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-Link"
                  to="/technology"
                  style={{ textDecoration: "none", color: props.mode.color }}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onClick={props.toggleChangeMode}
        />

      </div>
      </nav>
    </div>
  );
};

export default Navbar;
