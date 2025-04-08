// src/pages/Courses.jsx
import { useState } from 'react';
import { FiSearch, FiPlus, FiBook, FiClock, FiUsers, FiCheckCircle, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample course data with IDs
  const courses = [
    {
      id: 'course-1',
      title: "Financial Accounting",
      description: "Learn financial accounting basics and fundamentals",
      students: 23,
      lessons: 25,
      duration: "5 hours",
      status: "Active"
    },
    {
      id: 'course-2',
      title: "Accounting1",
      description: "Learn accounting 1 basics and fundamentals",
      students: 32,
      lessons: 12,
      duration: "3 hours",
      status: "Active"
    },
    {
      id: 'course-3',
      title: "Accounting2",
      description: "Learn accounting 2 basics and fundamentals",
      students: 23,
      lessons: 32,
      duration: "7 hours",
      status: "Active"
    },
    {
      id: 'course-4',
      title: "Accounting Cycle",
      description: "Learn accounting cycle basics and fundamentals",
      students: 23,
      lessons: 32,
      duration: "7 hours",
      status: "Active"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Oymaal</h1>
        <Link to="/courses/create" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <FiPlus className="mr-2" />
          Create Course
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h2 className="text-xl font-bold mb-4">Courses</h2>
        <p className="mb-6">Manage your courses and their content</p>

        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h3 className="text-lg font-bold mb-4">Course Management</h3>
          <p className="mb-4">View and manage all your courses</p>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by title or description"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-500" />
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiUsers className="inline mr-1" /> Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiBook className="inline mr-1" /> Lessons
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiClock className="inline mr-1" /> Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiCheckCircle className="inline mr-1" /> Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCourses.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No courses found.
                    </td>
                  </tr>
                ) : (
                  filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                        <div className="text-sm text-gray-500">{course.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.lessons}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${course.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            course.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-800'}`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          to={`/courses/${course.id}`} 
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Manage
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
