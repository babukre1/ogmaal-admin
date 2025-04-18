import React, { useEffect, useRef } from "react";

const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "doyiq0rno",
        uploadPreset: "ogmaal",
        sources: ["local", "url"],
        resourceType: "video",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          onUpload(result.info.secure_url);
        }
      }
    );
  }, [onUpload]);

  const handleClick = () => {
    widgetRef.current && widgetRef.current.open();
  };
  return (
    <>
      <button
        id="upload_widget"
        onClick={handleClick}
        type="button"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Upload Course Video
      </button>
    </>
  );
};

export default UploadWidget;
