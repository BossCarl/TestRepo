import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Course from './pages/course';
import Navbar from './components/navbar';
import Assessments from './pages/assessment';

import ChapterSvn from './pages/chapter_svn';
import ChapterSql from './pages/chapter_sql';
import ChapterHprog from './pages/chapter_hprog';

import CourseSvn1 from './pages/course/course1_svn';
import CourseHprog1 from './pages/course/course1_hprog';
import CourseSql1 from './pages/course/course1_sql';

import CourseSvn2 from './pages/course/course2_svn';
import CourseHprog2 from './pages/course/course2_hprog';
import CourseSql2 from './pages/course/course2_sql';

import CourseSvn3 from './pages/course/course3_svn';
import CourseHprog3 from './pages/course/course3_hprog';
import CourseSql3 from './pages/course/course3_sql';

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

          {/* COURSE 1 */}
          <Route path="/course1_svn/*" element={<><Sidebar /><CourseSvn1 /></>}
          />
          <Route path="/course1_hprog/*" element={<><Sidebar /><CourseHprog1 /></>}
          />
          <Route path="/course1_sql/*" element={<><Sidebar /><CourseSql1 /></>}
          />
          {/* COURSE 2 */}
          <Route path="/course2_svn/*" element={<><Sidebar /><CourseSvn2 /></>}
          />
          <Route path="/course2_hprog/*" element={<><Sidebar /><CourseHprog2 /></>}
          />
          <Route path="/course2_sql/*" element={<><Sidebar /><CourseSql2 /></>}
          />
          {/* COURSE 3 */}
          <Route path="/course3_svn/*" element={<><Sidebar /><CourseSvn3 /></>}
          />
          <Route path="/course3_hprog/*" element={<><Sidebar /><CourseHprog3 /></>}
          />
          <Route path="/course3_sql/*" element={<><Sidebar /><CourseSql3 /></>}
          />

          {/* CHAPTER LIST */}
          <Route path="/chapters_svn/*" element={<ChapterSvn />} />
          <Route path="/chapters_sql/*" element={<ChapterSql />} />
          <Route path="/chapters_hprog/*" element={<ChapterHprog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
