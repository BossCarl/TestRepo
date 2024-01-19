import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import '../css/mainLayout_styles.css';

function CourseSql(){

    return (
        <Fragment>
          <div id="layoutContainer">
          {/* Main layout */}
      <main className="mainLayout">
        {/* Start of Topic Container */}
        <div id="topic0" className="hidden">
          <div className="container">
            <h1>The SQL Queries</h1>
            <h4>Introduction to SQL Queries</h4>
            <br />
            <div class="row gy-5" style={{ backgroundColor: "#EBFFE5" }}>
              <div class="col-12">
                <div
                  class="rounded-3"
                  style={{
                    fontSize: "18px",
                    color: "#0e3b03",
                    backgroundColor: "#D9FFCF",
                    textAlign: "center",
                    overflow: "visible",
                    border: "2px solid",
                    borderColor: "#0e3b03"
                  }}
                >
                  <p className="lh-base">
                    The "SQL Queries" workshop provides participants with a comprehensive exploration of fundamental concepts related to SQL (Structured Query Language). Delving into syntax, database design, and optimization, the workshop empowers participants with practical skills to proficiently write efficient queries and effectively manage relational databases. The content covers various aspects of SQL, enabling participants to gain a solid understanding of querying techniques and database management principles.
                  </p>
                </div>
              </div>

              {/*BUTTON TO STUDY TOPIC*/}
              <div class="col-6 d-flex justify-content-center">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn"
                  style={{
                    color: "#0e3b03",
                    backgroundColor: "#D9FFCF",
                    textAlign: "center",
                    overflow: "visible",
                    border: "2px solid",
                    borderColor: "#0e3b03",
                    align: "center"
                 
                  }}
                >
                  <img src="/pics/study.png" alt="study" class="zoom"
                   
                  />
                </button>
              </div>
              {/*BUTTON FOR QUIZ*/}
              <div class="col-6 d-flex justify-content-center">
              <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn"
                  style={{
                    color: "#0e3b03",
                    backgroundColor: "#D9FFCF",
                    textAlign: "center",
                    overflow: "visible",
                    border: "2px solid",
                    borderColor: "#0e3b03",
                    align: "center"
                   
                  }}
                >
                  <img src="/pics/quizbtn.png" alt="study" class="zoom"
                 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      {/* End of Topic Container */}
      {/* End of Main Layout */}
    
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
          <p>You will be redirected to Google Form's website. Please keep your notes and answer the Quiz honestly.</p><p>Good luck trainee!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.open('https://www.google.com', '_blank')} style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px'}}>Yes</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>
            
          </div>
        </div>
      </div>
    </div>
    
          {/* Start of JS for Main Layout */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-+qU78ihVd8FhDInHkhNOl3p5nhtvZq+YP1Jv60hyVgvt/aGzfODJzL2mHTi/xIsN" crossorigin="anonymous"></script>
          {/* End of JS for Main Layout */}
        </Fragment>
      );
    }
export default CourseSql;