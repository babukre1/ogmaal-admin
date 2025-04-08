// src/pages/Courses/CourseDetails.jsx
const CourseDetails = () => {
    const enrolledStudents = [
      { name: "Call dahir", email: "calldahir@gmail.com", progress: "75%", lastActive: "today" },
      { name: "Najlib dahir", email: "jajlibdahir@gmail.com", progress: "95%", lastActive: "2 days ago" },
      { name: "Fadumo dahir", email: "fadumodahir@gmail.com", progress: "93%", lastActive: "5 days ago" },
      { name: "Xalimo dahir", email: "xalimodahir@gmail.com", progress: "83%", lastActive: "4 days ago" },
      { name: "Xalimo dahir", email: "xalimodahir@gmail.com", progress: "99%", lastActive: "3 days ago" },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Accounting</h1>
        <p className="mb-6">Learn Accounting</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4">Course Content</h2>
              <p className="mb-4">Manage your course modules and lessons</p>
              
              <div className="space-y-4">
                <h3 className="font-bold">Introduction to accounting</h3>
                
                <div className="pl-4 space-y-2">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Users of Accounting Information</span>
                    <span className="text-gray-500">Video • 15:30</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Types of Accounting</span>
                    <span className="text-gray-500">Video • 16:30</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Basic Accounting Principles</span>
                    <span className="text-gray-500">Video • 12:30</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Accounting Equation</span>
                    <span className="text-gray-500">Video • 13:30</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Double-Entry System</span>
                    <span className="text-gray-500">Video • 1:31:0</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span>Financial Statements</span>
                    <span className="text-gray-500">Video • 23:10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Enrolled Students</h2>
                <div className="flex items-center">
                  <span className="mr-2">Setting</span>
                </div>
              </div>
              <p className="mb-4">Manage students enrolled in this course</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {enrolledStudents.map((student, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{student.progress}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{student.lastActive}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:underline">Message</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4">Course Overview</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">Progress</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-right">75%</p>
                </div>
                
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="font-medium">Active</p>
                </div>
                
                <div>
                  <p className="text-gray-500">Students</p>
                  <p className="font-medium">18</p>
                </div>
                
                <div>
                  <p className="text-gray-500">Lessons</p>
                  <p className="font-medium">24</p>
                </div>
                
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">3 weeks</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Edit Course</h2>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Edit Course
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseDetails;