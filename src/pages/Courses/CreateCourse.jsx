// src/pages/Courses/CreateCourse.jsx
import { useState } from 'react';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: 'Financial accounting',
    description: 'Learn the basic of accounting include accounting 1 , accounting 2',
    startDate: 'March 10th 2025',
    endDate: 'May 10th 2025',
    price: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <p className="mb-6">Set up a new course for your students</p>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Course Information</h2>
        <p className="mb-4">Basic information about your course</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Course Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={courseData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">End Date</label>
            <input
              type="text"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Price ($)</label>
            <input
              type="text"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Course Thumbnail</label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
              <p>Choose No file chosen</p>
              <p className="text-sm text-gray-500 mt-2">
                Recommended size: 1280x720 pixels (16:9 ratio)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Course Structure</h2>
        <p className="mb-4">
          You'll be able to add lessons and modules after creating the course
        </p>
        <p>Course structure will be available after creation</p>
      </div>
      
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;