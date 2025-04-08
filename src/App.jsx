// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses/Courses';
import CourseDetails from './pages/Courses/CourseDetails';
import CreateCourse from './pages/Courses/CreateCourse';
import Students from './pages/Students';
import Enrollments from './pages/Enrollments';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/courses/create" element={<Layout><CreateCourse /></Layout>} />
        <Route path="/courses/:id" element={<Layout><CourseDetails /></Layout>} />
        <Route path="/students" element={<Layout><Students /></Layout>} />
        <Route path="/enrollments" element={<Layout><Enrollments /></Layout>} />
        <Route path="/payments" element={<Layout><Payments /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;