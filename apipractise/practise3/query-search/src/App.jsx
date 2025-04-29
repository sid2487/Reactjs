import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import BlogList from './pages/BlogList'

function App() {

  return (
   <div>
    <nav style={{ padding: "1rem"}}>
      <Link to="/" style={{ marginRight: "1rem" }}>Blog Search</Link>
    </nav>

    <Routes>
      <Route path='/' element={<BlogList />} />
    </Routes>
   </div>
  )
}

export default App
