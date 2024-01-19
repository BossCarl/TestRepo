<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { showNextTopic } from "../js/script";

function Sidebar() {
    const location = useLocation();
    let sidebarTitle = '';

    switch (location.pathname) {
        case '/course_sql':
            sidebarTitle = 'The SQL Queries';
            break;
        case '/course_svn':
            sidebarTitle = 'Subversion Control';
            break;
        case '/course_hprog':
            sidebarTitle = 'HTML Programming';
            break;
        default:
            sidebarTitle = 'Default Title';
            break;
    }

    return (
        <>
            <div className="mainSvnContainer">
                <div className="sidebar" id="sidebarMenu">
                    <span className="d-flex justify-content-end sidebarTitle">{sidebarTitle}</span>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                      {/* START OF SIDEBAR ITEM */}
                        <li className="nav-item">
                            <a onClick={() => showNextTopic(0)} className="sidebarItems nav-link" aria-current="page">
                                HOME
                            </a>
                        </li>
                        {/* END OF SIDEBAR ITEM */}
                        <li>
                            <Link to="/course" className="itemgroup">
                                <img src="/pics/return.png" className="btnReturn float-start" alt="return-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
=======
import { Link } from 'react-router-dom';
import 'bootstrap';
// Corrected Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
// Corrected Bootstrap Icons CSS import
import 'bootstrap-icons/font/bootstrap-icons.css';  
import { showNextTopic } from "../js/script";

function Sidebar() {
    return(
        <>
        <div className="mainSvnContainer">
      <div className="sidebar" id="sidebarMenu">
        
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
          <li>
          <Link to="/course" className="itemgroup">
          <img src="/pics/return.png" className="btnReturn float-start" alt="return-icon" />
        </Link>
        </li>
        </ul>
      </div>
      </div>
      </>
    )
}

export default Sidebar;
>>>>>>> 968f1e91dae300ea4c9ead57a9dea4d11ce8cf44
