import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmount } from './features/counter/counterSlice';

const App = () => {
  const [amount, setAmount] = useState()

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleIncreamentClick = () => {
    dispatch(increament());
  }

  const handleDecreamentClick = () => {
    dispatch(decreament());
  }

  const handleAmountClick = () => {
    dispatch(increamentByAmount(amount))
  }
  return (
    <div className=" flex justify-center items-center h-screen bg-black text-white">
      <div className="flex justify-center flex-col text-center">
        <button
          className="bg-amber-500 w-18 h-8 mb-4 rounded-lg hover:bg-amber-600 cursor-pointer"
          onClick={handleIncreamentClick}
        >
          +
        </button>
        <p>count: {count} </p>
        <button
        
          className="bg-amber-500 w-18 h-8 mt-4 rounded-lg hover:bg-amber-600 cursor-pointer"
          onClick={handleDecreamentClick}
        >
          -
        </button>
        <br />
        <br />
      </div>
      <div className='flex justify-center flex-col text-center ml-20 items-center'>
        <input
        className='border border-white rounded-lg p-1'
          value={amount}
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-amber-500 w-20 h-8 mt-4 rounded-lg hover:bg-amber-600 cursor-pointer"
          onClick={handleAmountClick}
        >
          Set Value
        </button>
      </div>
    </div>
  );
}

export default App