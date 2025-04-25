import React from "react";
import { useUser } from "../context/UserContext";

const Message = () => {

    const {username} = useUser();

    return <h2>Hello, {username}</h2>
}

export default Message