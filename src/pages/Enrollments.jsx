// src/pages/Enrollments.jsx
const Enrollments = () => {
    const enrollments = [
      {
        studentName: "Muscab Mahamed Omar",
        number: "+2526194342256",
        email: "muscab@gmail.com",
        requestedCourse: "Accounting1",
        requestDate: "2024-02-23",
        status: "Pending"
      },
      {
        studentName: "Safiyo Salaad Call",
        number: "+25261443452596",
        email: "Safiyo@gmail.com",
        requestedCourse: "Accounting2",
        requestDate: "2024-9-25",
        status: "Pending"
      },
      // Add more enrollment data as needed
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Enrollment Requests</h1>
        <p className="mb-6">Manage your enrollment and their content</p>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Enrollment management</h2>
          <p className="mb-4">View and manage all your enrollments</p>
          
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="searchCheckbox"
              className="mr-2"
            />
            <label htmlFor="searchCheckbox">Search student name, email or courses</label>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enrollments.map((enrollment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.number}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.requestedCourse}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.requestDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enrollment.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      <button className="text-green-600 hover:underline">Approve</button>
                      <button className="text-red-600 hover:underline">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Enrollments;