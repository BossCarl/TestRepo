import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import { showNextTopic } from "../js/script";

function Course_clang() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>C Language</span>
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

            {/* React-Bootstrap Modal Trigger Button */}
            <Button variant="primary" onClick={handleShowModal}>
              Take A Quiz!
            </Button>
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

      {/* React-Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Take A Quiz!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add quiz content here */}
          <p>This is the quiz content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* You can handle quiz submission logic here */}
          <Button variant="primary" onClick={() => console.log('Quiz submitted')}>
            Take Quiz
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Start of JS for Main Layout */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-+qU78ihVd8FhDInHkhNOl3p5nhtvZq+YP1Jv60hyVgvt/aGzfODJzL2mHTi/xIsN" crossorigin="anonymous"></script>
      {/* End of JS for Main Layout */}
    </Fragment>
  );
}

export default Course_clang;
