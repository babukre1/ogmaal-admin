// src/pages/Settings.jsx
const Settings = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Setting</h1>
        <p className="mb-6">Manage your account and system settings</p>
  
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex border-b mb-6 space-x-4">
            <button className="px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600">Profile</button>
            <button className="px-4 py-2 font-medium">System</button>
            <button className="px-4 py-2 font-medium">Security</button>
          </div>
  
          <div>
            <h2 className="text-lg font-bold mb-4">Profile Settings</h2>
            <p className="mb-6">Update your personal information</p>
  
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  value="Admin User"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
  
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value="AdminUser@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
  
              <div>
                <label className="block text-gray-700 mb-2">Current Password</label>
                <div className="flex space-x-2 mb-2">
                  {[false, true, false, true].map((filled, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${filled ? 'bg-gray-700' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
              </div>
  
              <div>
                <label className="block text-gray-700 mb-2">New Password</label>
                <div className="flex space-x-2 mb-2">
                  {[false, true, true].map((filled, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${filled ? 'bg-gray-700' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
              </div>
  
              <div>
                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                <div className="flex space-x-2 mb-2">
                  {[false, true, true].map((filled, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${filled ? 'bg-gray-700' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
              </div>
  
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Settings;
  