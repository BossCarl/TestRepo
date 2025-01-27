import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TeamC_Assessments() {

  return (

    <Fragment>
      <div className="container mt-5 mx-auto">
        <h2 className="text-left mb-4">ASSESSMENTS</h2>

        <div className="card mb-3" style={{ borderRadius: '15px', backgroundColor: '#bce8b1' }}>
          <div className="card-body d-flex justify-content-between">
            <p style={{ color: '#0e3b03' }} className="h4"><b>C Language Programming</b></p>
            <small style={{ fontStyle: 'italic', alignSelf: 'center', color: '#0e3b03' }}>-STATUS-</small>
          </div>
        </div>

        <div className="card mb-3" style={{ borderRadius: '15px', backgroundColor: '#bce8b1' }}>
          <div className="card-body d-flex justify-content-between">
            <p style={{ color: '#0e3b03' }} className="h4"><b>Version Control: Subversion</b></p>
            <small style={{ fontStyle: 'italic', alignSelf: 'center', color: '#0e3b03' }}>-STATUS-</small>
          </div>
        </div>

        <div className="card mb-3" style={{ borderRadius: '15px', backgroundColor: '#bce8b1' }}>
          <div className="card-body d-flex justify-content-between">
            <p style={{ color: '#0e3b03' }} className="h4"><b>HTML Programming</b></p>
            <small style={{ fontStyle: 'italic', alignSelf: 'center', color: '#0e3b03' }}>-STATUS-</small>
          </div>
        </div>
      </div>

      {/* Bootstrap with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </Fragment>
  )
}

export default TeamC_Assessments;
