import React, { useRef, useState } from 'react'

const App = () => {
  // const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  }
  // let val = 2;

  // let val = useRef(0);

  // let btnRef = useRef();

  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = "red";
  // }


  // const handleIncrement = () => {
  //   // console.log("val: ", val+1);
  //   val.current = val.current + 1;
  //   console.log("val: ", val.current);
  //   setCount(count+1);
  // }
  return (
    <div className=" h-screen bg-gray-500 text-center">
      
      <h1>Stopwatch</h1>
      <div className="flex flex-col items-center mt-20">
        {/* <button ref={btnRef} className='bg-blue-500 rounded-lg w-30 h-10 text-black-100 hover:bg-blue-600 cursor-pointer' onClick={handleIncrement}>Increment</button>
        <br />
        <br />

        <button className='border' onClick={changeColor}>
          change color of first of btn
        </button>


        <div className='text-lg font-bold'>count: {count}</div> */}
        <h2>Timer: {time}</h2>
        <button onClick={startTimer} className='border bg-gray-300 text-black m-2 p-2 cursor-pointer rounded hover:bg-gray-500'>StartTimer</button>
        <button onClick={stopTimer} className='border bg-gray-300 text-black m-2 p-2 cursor-pointer rounded hover:bg-gray-500'>StopTimer</button>
        <button onClick={resetTimer} className='border bg-gray-300 text-black m-2 p-2 cursor-pointer rounded hover:bg-gray-500'>ResetTimer</button>



      </div>
    </div>
  );
}

export default App