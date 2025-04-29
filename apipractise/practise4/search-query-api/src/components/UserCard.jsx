import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user })=> {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "250px"
        
        }}
      >
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <Link to={`/users/${user.id}`}>View Profile</Link>
      </div>
    );
};

export default UserCard;