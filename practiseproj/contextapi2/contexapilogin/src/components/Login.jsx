import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";

const Login = () => {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState();

    const handleLogin = () => {
        setUser({ username });
    }
    return (
        <div>
            <input 
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;