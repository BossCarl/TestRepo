import { Link, useLocation } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { showNextTopic } from "../js/script";
import '../css/sidebar_styles.css';

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
