import { useState } from 'react'
import './App.css'
import { UserContext, UserProvider } from './context/UserContext'
import { useContext } from 'react'
import Profile from './components/Profile';
import Login from './components/Login';


function App() {
  const { username } = useContext(UserContext);

  return (

    <div>
      {username ? <Profile /> : <Login />}
    </div>


  )
};


export default App
