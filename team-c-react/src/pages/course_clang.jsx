import { Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import { showNextTopic } from "../js/script.jsx";
import Sidebar from "../components/sidebar.jsx";

function Course_clang() {

  return (
    <Fragment>
      

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

export default Course_clang;
