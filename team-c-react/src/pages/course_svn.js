import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "../components/navbar";
import '../css/sidebar.css';
import { showNextTopic, showCongratulationsMessage } from "../js/script";

function Course_svn(){
    return (
    <Fragment>
      {/* Start of Sidebar */}
      <nav id="sidebarMenu" className="d-lg-block sidebar">
        <div className="container-fluid">

          <Link to="/course" className="itemgroup" style={{ backgroundColor: '#D9FFCF' }}>
            <img src="/pics/return.png" className="float-start" style={{ width: '30px', height: '30px' }} alt="return-icon" />
          </Link>

          <div className="list-group list-group-flush mx-3 mt-4">
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple h4 fw-bold text-s d-flex align-items-center text-end" aria-current="true" style={{ backgroundColor: '#D9FFCF', color: '#0e3b03', whiteSpace: 'normal' }}>
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>The Subversion</span>
            </Link>

            <Link to="#" onClick={() => showNextTopic(0)} className="list-group-item list-group-item-action" style={{ fontSize: '18px', color: '#0e3b03', backgroundColor: '#D9FFCF', textAlign: 'right', overflow: 'visible' }}>
              <i className="fas fa-chart-area fa-fw me-3"></i><span>TOPIC #1</span>
            </Link>

            <Link to="#" onClick={() => showNextTopic(1)} className="list-group-item list-group-item-action" style={{ fontSize: '18px', color: '#0e3b03', backgroundColor: '#D9FFCF', textAlign: 'right', overflow: 'visible' }}>
              <i className="fas fa-lock fa-fw me-3"></i><span>TOPIC #2</span>
            </Link>

            <Link to="#" onClick={() => showNextTopic(2)} className="list-group-item list-group-item-action" style={{ fontSize: '18px', color: '#0e3b03', backgroundColor: '#D9FFCF', textAlign: 'right', overflow: 'visible' }}>
              <i className="fas fa-lock fa-fw me-3"></i><span>TOPIC #3</span>
            </Link>

            <Link to="#" onClick={() => showCongratulationsMessage()} className="list-group-item list-group-item-action" style={{ fontSize: '18px', color: '#0e3b03', backgroundColor: '#D9FFCF', textAlign: 'right', overflow: 'visible' }}>
              <i className="fas fa-lock fa-fw me-3"></i><span>Take A Quiz!</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main layout */}
      <main>
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

      {/* Start of Quiz Popup */}
      <div className="modal fade" id="congratulationsModal" tabIndex="-1" aria-labelledby="congratulationsModalLabel" aria-hidden="true">
        {/* ... your existing code ... */}
      </div>
      {/* End of Quiz Popup*/}
      {/* Start of JS for Main Layout */}
      <script src="js/script.js"></script>
      {/* End of JS for Main Layout */}
    </Fragment>
    )
}

export default Course_svn;