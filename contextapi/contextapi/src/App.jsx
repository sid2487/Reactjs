import { useState } from 'react'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
      <h1>Main App using context api</h1>
      <Counter />
      <Counter />
    </div>



    {/* <h2>Count {count}</h2>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} /> */}
    </>
  );
}

export default App;
