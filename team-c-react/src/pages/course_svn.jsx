import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { showNextTopic } from "../js/script.jsx";
import '../css/sidebar.css';
import '../css/subversion_page.css';

function Course_svn() {

  return (
    <Fragment>
      <div className="sidebar" id="sidebarMenu">
        <Link to="/course" className="itemgroup">
          <img src="/pics/return.png" className="btnReturn float-start" alt="return-icon" />
        </Link>
        <span className="d-flex justify-content-end sidebarTitle">The Subversion</span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" onClick={() => showNextTopic(0)} className="sidebarItems nav-link" aria-current="page">
              SHOW TOPIC 0
            </a>
          </li>
          <li>
            <a href="#" onClick={() => showNextTopic(1)} className="sidebarItems nav-link">
              SHOW TOPIC 1
            </a>
          </li>
          <li>
            <a href="#" onClick={() => showNextTopic(2)} className="sidebarItems nav-link">
              SHOW TOPIC 2
            </a>
          </li>
          <li>
            <a className="sidebarItems nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Take a Quiz!
            </a>
          </li>
        </ul>
      </div>

      {/* Main layout */}
      <main className="mainLayout">
        {/* Start of Topic Container */}
        <div id="topic0" className="hidden">
          TOPIC 0
        </div>
        <div id="topic1" className="hidden">
          TOPIC 1
        </div>
        <div id="topic2" className="hidden">
          TOPIC 2
        </div>
      </main>
      {/* End of Topic Container */}
      {/* End of Main Layout */}

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>You will be redirected to Google Form's website. Please keep your notes and answer the Quiz honestly.</p>
              <p>Good luck trainee!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.open('https://www.google.com', '_blank')} style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Yes</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Course_svn;
