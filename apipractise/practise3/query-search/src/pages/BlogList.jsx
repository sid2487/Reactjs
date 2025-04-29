import React, { useEffect, useState } from "react";
import { fetchBlog } from "../api/api";
import { useSearchParams } from "react-router-dom";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [seachParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(seachParams.get("search") || "");

  useEffect(() => {
    const displayBlog = async () => {
      const data = await fetchBlog();
      // console.log(data);
      setBlogData(data);
    };

    displayBlog();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ search: input.trim() });
    } else {
      setSearchParams({});
    }
    setInput("");
  };

  const searchQuery = seachParams.get("search") || ""; // searchParams.get('search'): Gets the value of ?search=... from the URL.
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Blog-Search</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search blog by title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Search
        </button>
      </form>

      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))
      ) : (
        <p>No matching blogs found.</p>
      )}
    </div>
  );
};

export default BlogList;