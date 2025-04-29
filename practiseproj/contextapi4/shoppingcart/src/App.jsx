import { useState } from 'react'
import './App.css'
import Item from './components/item'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Item name="Macbook pro" price={10000}/>
      <Item name="Usb Cable" price={400}/>
      <Item name="Mobile" price={35000}/>
      <Cart />
    </div>
  )
}

export default App;
