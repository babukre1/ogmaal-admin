// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Oymaal</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/enrollments"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Enrollments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payments"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
