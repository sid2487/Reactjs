import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Upload = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const uploader = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("caption", caption);
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:4001/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // use when file upload
        }
      });
      const data = response.data;
      console.log(data);
      setCaption(data.caption);
      setImage(data.image);
      navigate('/fetch');
      setCaption("");
      setImage(null);

    } catch (error) {
      // console.error("Upload failed:", error);
      console.log("Failed to upload", error.response.data)
      alert("upload failed");
    } finally{ setLoading(false)}
  }


  return (
    <form 
      onSubmit={uploader}
      className="max-w-md mx-auto mt-32 p-8 bg-gray-900 text-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center">Upload Image</h2>

      <input
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={caption}
        placeholder="Enter caption"
        type="text"
        onChange={(e) => setCaption(e.target.value)}
      />

      <input
        className="w-full bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
      >
        {loading ? "Loading...." : "Submit"}
      </button>
    </form>
  )
}

export default Upload;









