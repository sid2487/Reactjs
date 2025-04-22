import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) // setCounter function hai jo ki responsible hai counter variable ko update karne ke liye, av isme default value 15 hai which you can set anything.

  let [remCounter, setremCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20)
    setCounter(counter = counter + 1);
  }

  const removeValue = () => {
    if(remCounter > 0) setremCounter((remCounter = remCounter - 1));
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value {remCounter}</button>
      <br /> <br />
      <footer>Footer: {counter}</footer>
    </>
  );
}

export default App
