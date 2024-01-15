import React, { Fragment } from 'react';    
import 'bootstrap/dist/css/bootstrap.min.css';
import { enroll } from '../js/script.js';

function Dashboard(){

    return(
        <Fragment>
            {/* Start of Main Navbar */}
      <div className="main-container">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#D9FFCF' }}>
          <div className="container-fluid">
            <img className="logo me-1 img-fluid" src="pics/logo.png" alt="tsukiden-logo" style={{ width: '150px' }} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-success fw-bold" aria-current="page" href="homepage.html">Dashboard</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    My Courses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="course.html">Program Overview</a></li>
                    <li><a className="dropdown-item" href="assessment.html">Assessments</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="forum.html">Forum</a>
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
      {/* End of Main Navbar */}

      {/* Header title */}
      <div class="header p-3 h-50 d-flex align-items-center justify-content-center">
        <div class="title p-3 text-center">
            <div class="jap-char">
                <h1 class="fw-bold">月伝で自分のやり方を学びましょう。</h1>
            </div>
            <div class="eng-char">
                <h4>Learn your way at Tsukiden.</h4>
            </div>
            <div class="courses-btn mt-3">
                <a href="course.html" class="btn btn-view-course text-white">View Courses</a>
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
        {/* SUBVERSION */}
        <div className="card-container">
  <div className="card border-success mt-3 mb-3" style={{ maxWidth: '14rem', borderRadius: '10px' }}>
    <div className="card-header bg-transparent border-success"></div>
    <div className="card-body text-success" style={{ height: '100px' }}>
      <h3 className="card-title fw-bold">Version Control: SVN</h3>
    </div>
    <div className="card-footer bg-transparent border-success">
      <p className="card-text mt-4 ">
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

        {/* C - LANGUAGE */}
        <div className="card-container">
  <div className="card border-success mt-3 mb-3" style={{ maxWidth: '14rem', borderRadius: '10px' }}>
    <div className="card-header bg-transparent border-success"></div>
    <div className="card-body text-success" style={{ height: '100px' }}>
      <h3 className="card-title fw-bold">C Language Course</h3>
    </div>
    <div className="card-footer bg-transparent border-success">
      <p className="card-text mt-4 ">
        Learn the fundamentals of the C programming language, a powerful and widely used language for
        developing software applications and systems.
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

        {/* HTML PROGRAMMING */}
        <div className="card-container">
  <div className="card border-success mt-3 mb-3" style={{ maxWidth: '14rem', borderRadius: '10px' }}>
    <div className="card-header bg-transparent border-success"></div>
    <div className="card-body text-success" style={{ height: '100px' }}>
      <h3 className="card-title fw-bold">HTML Programming</h3>
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
        >
          Close
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
          onClick={() => enroll(1)}
        >
          Enroll
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
        >
          Close
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
          onClick={() => enroll(2)}
        >
          Enroll
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
        >
          Close
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
          onClick={() => enroll(3)}
        >
          Enroll
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
    )
}

export default Dashboard;