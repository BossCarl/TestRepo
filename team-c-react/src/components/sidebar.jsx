import { Link, useLocation } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { showNextTopic } from "../js/script";

function Sidebar() {
    const { pathname } = useLocation();
let sidebarTitle = '';
let url = '';

switch (pathname) {
  case '/course_sql':
    sidebarTitle = 'The SQL Queries';
    url = '/chapters_sql';
    break;
  case '/course_svn':
    sidebarTitle = 'Subversion Control';
    url = '/chapters_svn';
    break;
  case '/course_hprog':
    sidebarTitle = 'HTML Programming';
    url = '/chapters_hprog';
    break;
  default:
    sidebarTitle = 'Default Title';
    url = 'URL DATA'
    break;
}


    return (
        <>
            <div className="sidebar mainSvnContainer">
                <div className="sidebar" id="sidebarMenu">
                    <hr />
                    <span className="d-flex justify-content-center sidebarTitle">{sidebarTitle}</span>
                    <ul className="nav nav-pills flex-column mb-auto">
                      {/* START OF SIDEBAR ITEM */}
                        <li className="sidebarItem nav-item">
                            <a onClick={() => showNextTopic(0)} className="sidebarItems nav-link" aria-current="page">
                                HOME
                            </a>
                        </li>
                        {/* END OF SIDEBAR ITEM */}
                    </ul>
                    <hr />
                    <Link to={url} className="buttonReturn text-center" style={{ textDecoration: 'none', color: 'black' }}>
                          <div>
                            <img src="/pics/return.png" className="btnReturn" alt="return-icon" />
                            <span className="returnTitle" style={{ marginLeft: '5px' , color:'white'}}>Back</span>
                          </div>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
