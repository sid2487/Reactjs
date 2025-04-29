import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { username } = useContext(UserContext);
    return <h1>Hello, {username}</h1>
};


export default Profile;