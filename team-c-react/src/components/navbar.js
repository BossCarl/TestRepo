import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

export default function Navbar() {
  return (
    /* Start of Main Navbar */
    <div className="main-container">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#D9FFCF' }}>
        <div className="container-fluid">
          <img className="logo me-1 img-fluid" src="/pics/logo.png" alt="tsukiden-logo" style={{ width: '150px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/">Dashboard</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/course" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  My Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/course">Program Overview</Link></li>
                  <li><Link className="dropdown-item" to="/assessment">Assessments</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">Forum</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn" style={{ borderColor: '#0e3b03' }} type="submit">
                LOGOUT
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    /* End of Main Navbar */
  );
}
