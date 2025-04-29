import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }, [userId]);

    if(!user) return <p>Loading....</p>;


    return (
        <div style={{ padding: "2rem", border: "2px solid grey", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "350px"}}>
            <h2>{user.name}'s Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>

            <Link to="/users" style={{ display: "block", marginTop: "1rem"}}>Back to User's</Link>
        </div>
    );
};

export default  UserProfile;