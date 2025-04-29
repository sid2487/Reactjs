import React from "react";
import './Card.css';

const Card = ({ user }) => {
    
    return (
        <div className="card">
            <h2 className="card-title">{user.name}</h2>
            <p className="card-username">@{user.username}</p>
            <p className="card-email">{user.email}</p>
            <div className="card-address">
                <p>{user.address.city}, {user.address.street}</p>
            </div>
        </div>
    );
};

export default Card;