import React, { useEffect, useState } from "react";
import { blogApiData } from "../api/api";
import { Link } from "react-router-dom";

const Home = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const userBlog = async () => {
            const results = await blogApiData();
            // results.forEach((result) => {
            //     console.log(result.title)
            // })
            setBlogData(results);
        };

        userBlog();
    }, [])
    return (
        <div>
            <h2>Home- Blog List</h2>
            {blogData.map((result) => (
                <div key={result.id} style={{ marginBottom: "20px", border: "solid", padding: "10px", margin: "12px", borderRadius: "10px"}}>
                    <h3>{result.title}</h3>
                    <p>{result.body}</p>
                    <Link to={`/result/${result.id}/${result.title}/${result.body}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default  Home;