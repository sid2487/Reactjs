import { useState } from 'react'
import './App.css'
import { UserProvider } from './context/UserContext'
import Message from './components/Message'

function App() {

  return (
    <UserProvider>
      <h1>welcome to context api demo</h1>
      <Message />
    </UserProvider>
  )
}

export default App
