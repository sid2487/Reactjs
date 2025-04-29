import React, { createContext, use, useState } from "react";

// create context
export const UserContext = createContext();


// provider components
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('')

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
};