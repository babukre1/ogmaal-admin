import { useState } from "react";
import UploadWidget from "../../components/UploadWidget"; // adjust path as needed
import axios from "axios";
import UploadThumbnailWidget from "../../components/UploadThumbnailWidget";

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    price: "",
    thumbnailUrl: "",
    videoUrl: "", // holds Cloudinary video URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVideoUpload = (url) => {
    setCourseData((prev) => ({
      ...prev,
      videoUrl: url,
    }));
    console.log(courseData);
  };
  const handleThumbnailUpload = (url) => {
    setCourseData((prev) => ({
      ...prev,
      thumbnailUrl: url,
    }));
    console.log(courseData);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/course/create-course", courseData); // replace with your backend endpoint
      alert("Course created successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <p className="mb-6">Set up a new course for your students</p>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Course Information</h2>
        <p className="mb-4">Basic information about your course</p>

        <div className="space-y-6">
          {/* Title */}
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

          {/* Description */}
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

          {/* Start Date */}
          <div>
            <label className="block text-gray-700 mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-gray-700 mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Price */}
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

          <UploadThumbnailWidget onUpload={handleThumbnailUpload} />

          {/* Video Upload */}
          <div>
            <label className="block text-gray-700 mb-2">Course Video</label>
            <UploadWidget onUpload={handleVideoUpload} />
            {courseData.videoUrl && (
              <video controls className="mt-4 w-full max-w-md">
                <source src={courseData.videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;
