import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProgressPage from './pages/ProgressPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tasks' element={<ProgressPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App