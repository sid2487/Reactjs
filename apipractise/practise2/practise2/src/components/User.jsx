import React, { use } from "react";

const User = ({user}) => {
    return (
      <div
        style={{
          border: "solid grey",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "grey",
        }}
      >
        <h2 style={{ color: "black" }}>{user.name}</h2>
        <p style={{ color: "black" }}>{user.email}</p>
        <p style={{ color: "black" }}>{user.username}</p>
        <div style={{ color: "black" }}>
          {user.address.city}, {user.address.street}
        </div>
      </div>
    );
};

export default User;