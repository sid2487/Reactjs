import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <div style={{ width: '100%'}}>
      <nav style={{ padding: "1rem", background: "grey", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            marginLeft: "1rem",
            padding: "10px",
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/users"
          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          Users
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
