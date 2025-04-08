// src/pages/Dashboard.jsx
const Dashboard = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="mb-6">Welcome back, Professor Ogmaal!</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total students</h3>
            <p className="text-3xl font-bold">42</p>
            <p className="text-green-500">+5 last month</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Active Courses</h3>
            <p className="text-3xl font-bold">3</p>
            <p className="text-green-500">+1 last month</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Hours taught</h3>
            <p className="text-3xl font-bold">100</p>
            <p className="text-green-500">+7 from last month</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold">$3,446</p>
            <p className="text-green-500">+10% from last month</p>
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Student</h2>
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded">Setting</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Active Courses</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Upcoming</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Completed</button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((course) => (
            <div key={course} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">FINICIAL ACCOUNTING</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1">4.5k</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Become an expert quickbooks and learn how to keep and maintain quickbooks records for perfect accuracy
              </p>
              <p className="font-bold mb-2">$15.00</p>
  
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Progress</span>
                  <span>{70 + course * 10}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${70 + course * 10}%` }}
                  ></div>
                </div>
              </div>
  
              <div className="flex justify-between">
                <div>
                  <span>Students</span>
                  <span className="ml-2 font-bold">{18 + course * 5}</span>
                </div>
                <button className="text-blue-600 hover:underline">Manage Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  