import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Fetch = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/fetchfiles"
        );
        const data = response?.data?.files || [];
        console.log(response);
        setFiles(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchImage();
  }, []);

  const goBack = () => {
    navigate('/');
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Uploaded Files</h2>

      <button onClick={goBack} className="m-4 p-4 bg-teal-700 rounded hover:bg-teal-900 cursor-pointer">Go back</button>

      {files.length === 0 ? (
        <p className="text-center">No uploads found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {files.map((item) => (
            <div
              key={item._id}
              className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center"
            >
              {item.fileType?.includes("image") ? (
                <img
                  src={item.fileUrl}
                  alt={item.caption}
                  className="w-full h-80 object-cover rounded mb-3"
                />
              ) : item.fileType?.includes("video") ? (
                <video
                  controls
                  src={item.fileUrl}
                  className="w-full h-60 object-cover rounded mb-3"
                />
              ) : (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mb-3"
                >
                  View Document
                </a>
              )}
              <p className="text-sm text-gray-300">{item.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetch;