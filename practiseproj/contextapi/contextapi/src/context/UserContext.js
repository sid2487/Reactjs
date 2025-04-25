import React, { Children, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ Children }) => {
    const username = "neha"
    return (
        <UserContext.Provider value={{username}}>
            {Children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);