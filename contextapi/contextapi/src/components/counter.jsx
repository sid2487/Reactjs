import React from "react";
import { useCounter } from "../context/CounterContext";

// const Counter = ({ count, setCount }) => {
//     return (
//         <div>
//           <button onClick={() => setCount(count + 1)}>Increase</button>
//           <button onClick={() => setCount(count - 1)}>Decrease</button>
//         </div>
     
//     );
// };

const Counter = () => {
    const { count, setCount } = useCounter();


    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increament</button>
            <button onClick={() => setCount(count-1)}>Decreament</button>
        </div>
    )
}

export default Counter;