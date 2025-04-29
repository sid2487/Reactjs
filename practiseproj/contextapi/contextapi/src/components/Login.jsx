import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
    const [input, setInput] = useState("");
    const { setUsername } = useContext(UserContext);

    const handleLogin = () => {
        setUsername(input);
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="Enter username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <button onChange={handleLogin}>Login</button>
        </div>
    )
};


export default Login;