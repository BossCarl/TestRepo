/* MODULES & COMPONENTS */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../src/TeamCComponents/pages/dashboard';
import Course from '../src/TeamCComponents/pages/course';
import Navbar from '../src/TeamCComponents/components/navbar';
import Assessments from '../src/TeamCComponents/pages/assessment';
import Sidebar from '../src/TeamCComponents/components/sidebar';
/* COURSE LISTS */
import ChapterSvn from '../src/TeamCComponents/pages/chapter_svn';
import ChapterSql from '../src/TeamCComponents/pages/chapter_sql';
import ChapterHprog from '../src/TeamCComponents/pages/chapter_hprog';
/* CHAPTER 1 */
import CourseSvn1 from '../src/TeamCComponents/pages/course/course1_svn';
import CourseHprog1 from '../src/TeamCComponents/pages/course/course1_hprog';
import CourseSql1 from '../src/TeamCComponents/pages/course/course1_sql';
/* CHAPTER 2 */
import CourseSvn2 from '../src/TeamCComponents/pages/course/course2_svn';
import CourseHprog2 from '../src/TeamCComponents/pages/course/course2_hprog';
import CourseSql2 from '../src/TeamCComponents/pages/course/course2_sql';
/* CHAPTER 3 */
import CourseSvn3 from '../src/TeamCComponents/pages/course/course3_svn';
import CourseHprog3 from '../src/TeamCComponents/pages/course/course3_hprog';
import CourseSql3 from '../src/TeamCComponents/pages/course/course3_sql';
/* OTHERS */
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
