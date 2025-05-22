import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setName } from './features/formSlice';

const App = () => {

  const { name, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Simple Redux Form</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        placeholder="Enter Your name"
        className='border p-2 rounded mb-3 w-64'
      />
      
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        placeholder="Enter Your email"
        className='border p-2 rounded mb-3 w-64'
      />

      <div>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Email:</strong>{email}</p>
      </div>


    </div>
  );
}

export default App