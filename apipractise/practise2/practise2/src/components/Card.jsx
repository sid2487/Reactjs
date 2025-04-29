import React from "react";

const Card = ({ user }) => {
    return (
      <div
        style={{
          border: "1px solid",
          margin: "10px",
          padding: "15px",
          backgroundColor: "grey",
          borderRadius: "10px",
          width: "300px"
        }}
      >
        <h2 style={{ color: "black" }}>{user.name}</h2>
        <p style={{ color: "black" }}>@{user.username}</p>
        <p style={{ color: "black" }}>{user.email}</p>
        <div style={{ color: "black" }}>
          {user.address.street}, {user.address.city}
        </div>
      </div>
    );
};

export default Card;