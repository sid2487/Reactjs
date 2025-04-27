import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import WeatherCard from './components/WeatherCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput />
      <WeatherCard />
    </div>
  )
}

export default App
