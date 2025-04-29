import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';

function App() {

  return (
    <div>
      <nav style={{ padding: "1rem", background: "#ee"}}>
        <Link to={"/"} style={{ marginRight: "10px"}}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/result/:id/:title/:body' element={<BlogDetails />} />
      </Routes>
    </div>
  )
}

export default App;
