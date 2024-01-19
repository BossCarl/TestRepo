import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Course from './pages/course';
import Navbar from './components/navbar';
import Assessments from './pages/assessment';
import CourseSvn from './pages/course_svn';
import CourseSql from './pages/course_sql';
import CourseHprog from './pages/course_hprog';  
import Sidebar from './components/sidebar';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <Navbar />
      <div className="navcontainer">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assessment" element={<Assessments />} />
          <Route path="/course" element={<Course />} />

          {/* Sidebar included only in these routes */}
          <Route
            path="/course_svn/*"
            element={
              <>
                <Sidebar />
                <CourseSvn />
              </>
            }
          />
          <Route
            path="/course_hprog/*"
            element={
              <>
                <Sidebar />
                <CourseHprog />
              </>
            }
          />
          <Route
            path="/course_sql/*"
            element={
              <>
                <Sidebar />
                <CourseSql />

              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
