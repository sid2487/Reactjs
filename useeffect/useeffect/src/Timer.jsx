import React, {useState, useEffect} from "react";

const Timer = () => {

    const [time, setTime] = useState(0);
    
    useEffect(() => {
      // mounted
      console.log("Add new interval")
      const timer = setInterval(() => setTime(time + 1), 1000);

      // unmount
      return function () {
        console.log("clear the current interval")
        clearInterval(timer);
      };


    }, [time])

    

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current Time is {time}</p>
        </div>
    )
};

export default Timer