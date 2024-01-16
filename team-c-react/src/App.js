import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Course from './pages/course';
import Navbar from './components/navbar';
import Assessments from './pages/assessment';
import Course_svn from './pages/course_svn';
import Course_clang from './pages/course_clang';
import Course_hprog from './pages/course_hprog';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
    <Navbar />
    <div className="navcontainer">
    <Routes>
      <Route path="/" element= {<Dashboard />} />
      <Route path="/assessment" element= {<Assessments />} />
      <Route path="/course" element= {<Course />} />
      <Route path="/course_svn" element= {<Course_svn />} />
      <Route path="/course_hprog" element= {<Course_hprog />} />
      <Route path="/course_clang" element= {<Course_clang />} />

    </Routes>
    </div>
    </>
  );
}

export default App;
