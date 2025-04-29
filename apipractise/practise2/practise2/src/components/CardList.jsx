import React from "react";
import Card from "./Card";


const CardList = ({ users }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            {users.map((user) => (
                <Card key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default CardList;