import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/sidebar.css';
import '../../css/mainLayout_styles.css';
import '../../css/sidebar.css';

function CourseSvn1(){
  const { pathname } = useLocation();
  let layoutTitle = '';
  let subTitle = '';
  let descText = '';
  
  switch (pathname) {
 
    case '/course1_svn':
      layoutTitle = 'CHAPTER 1';
      subTitle = 'Introduction to Subversion Cotnrol';
      descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      break;
      
    default:
      layoutTitle = '-NO TITLE-';
      subTitle = '-NO SUBTTLE-';
      descText = '-NO DESCTEXT-';
      break;
  }

    return (
        <Fragment>
          <div id="layoutContainer">
          {/* Main layout */}
      <main className="mainLayout">
        {/* Start of Topic Container */}
        <div id="topic0" className="hidden">
          <div className="container">
            <h1>{layoutTitle}</h1>
            <h4>{subTitle}</h4>
            <br />
            <div className="row gy-5" style={{ backgroundColor: "#EBFFE5" }}>
              <div className="col-12">
                <div
                  className="rounded-3"
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
                  <p className="lh-base">{descText}</p>
                </div>
              </div>

              {/*BUTTON TO STUDY TOPIC*/}
              <div className="col-6 d-flex justify-content-center">
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
                  <img src="/pics/study.png" alt="study" className="zoom"
                   
                  />
                </button>
              </div>
              {/*BUTTON FOR QUIZ*/}
              <div className="col-6 d-flex justify-content-center">
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
                  <img src="/pics/quizbtn.png" alt="study" className="zoom"
                 
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
export default CourseSvn1;