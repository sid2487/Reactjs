import { createContext, useContext, useState } from "react";

// 1. Create context
const CounterContext = createContext();

// 2. Create provider
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

// 3. create a custom hook for easier use
export const useCounter = () => useContext(CounterContext);