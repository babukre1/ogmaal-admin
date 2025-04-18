import React, { useEffect, useRef } from "react";

const UploadThumbnailWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "doyiq0rno",
        uploadPreset: "ogmaal",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          onUpload(result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        widgetRef.current.open();
      },
      false
    );
  }, [onUpload]);

  return (
    <>
      <button id="upload_widget" type="button">
          <label className="block text-gray-700 mb-2">Course Thumbnail</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <p>Choose No file chosen</p>
            <p className="text-sm text-gray-500 mt-2">
              Recommended size: 1280x720 pixels (16:9 ratio)
            </p>
        </div>
      </button>
    </>
  );
};

export default UploadThumbnailWidget;
