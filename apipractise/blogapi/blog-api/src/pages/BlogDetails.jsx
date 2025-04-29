import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id, title, body } = useParams();
    return (
        <div style={{ border: "solid", margin: "10px", padding: "10px"}}>
            <h1 style={{ fontWeight: "bolder", color: "red"}}>Blog Detail page</h1>
            <p style={{ color: "white"}}>Showing blog with ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>

            <Link to="/">Back to Blogs</Link>
        </div>
    );
};

export default BlogDetails;