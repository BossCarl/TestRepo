import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { enroll } from '../js/script';

import '../css/dashboard_page.css'
import Navbar from '../components/navbar';


function Dashboard() {
  return (
    <Fragment>
      {/* Header title */}
      <div className="header p-3 h-50 d-flex align-items-center justify-content-center">
        <div className="title p-3 text-center">
          <div className="jap-char">
            <h1 className="fw-bold">月伝で自分のやり方を学びましょう。</h1>
          </div>
          <div className="eng-char">
            <h4>Learn your way at Tsukiden.</h4>
          </div>
          <div className="courses-btn mt-3">
            <Link to="/course" className="btn btn-view-course text-white">View Courses</Link>
          </div>
        </div>
      </div>
      {/* End of Header title */}

      {/* Course Previews */}
      <div className="course-title">
        <h1 className="course-prev fw-bold text-center mt-5">Course Previews</h1>
      </div>

      {/* Courses */}
<div className="course-preview-ctn">
  {/* C - LANGUAGE */}
  <div className="card-container">
    <div className="card border-success mt-3 mb-3" style={{ maxWidth: '235px', borderRadius: '10px' }}>
      <div className="card-header bg-transparent border-success"></div>
      <div className="card-body text-success" style={{ height: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">C Programming</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
          In a C programming course, students learn essential concepts such as syntax, data types, and memory management, equipping them with practical skills to write efficient code and system that is needed for.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            id="enrollButton2"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Version Control: SVN */}
  <div className="card-container">
    <div className="card border-success mt-3 mb-3" style={{ maxWidth: '235px', borderRadius: '10px' }}>
      <div className="card-header bg-transparent border-success"></div>
      <div className="card-body text-success" style={{ height: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">Version Control: SVN</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
          Apache Subversion (SVN) is a centralized version control system, facilitating collaborative
          software development through version tracking, allowing multiple developers to work on projects
          concurrently.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            id="enrollButton1"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* HTML PROGRAMMING */}
  <div className="card-container">
    <div className="card border-success mt-3 mb-3" style={{ maxWidth: '235px', borderRadius: '10px' }}>
      <div className="card-header bg-transparent border-success"></div>
      <div className="card-body text-success" style={{ height: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">HTML Programming</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
          HTML (Hypertext Markup Language) is the standard language for creating web pages, defining the
          structure and content using tags, ensuring compatibility and accessibility across various browsers.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            id="enrollButton3"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End of Courses */}



      {/* Modals */}
      {/* MODAL C-LANG */}
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">C Language Course</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(1)}
              >
                Enroll
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* MODAL SUBVERSION */}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">The Subversion Course</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(2)}
              >
                Enroll
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* MODAL HTML PROGRAMMING */}
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel3">HTML Programming Course</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(3)}
              >
                Enroll
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#0e3b03',
                  color: '#ffffff',
                  borderRadius: '20px',
                  fontSize: '15px'
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      {/* End of Modals */}

      {/* Bootstrap with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"></script>
    </Fragment>
  );
}

export default Dashboard;
