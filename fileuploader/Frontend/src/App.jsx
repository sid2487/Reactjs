import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Upload from './components/Upload'
import Fetch from './components/Fetch'

const router = createBrowserRouter([
  {
    path: '/', element: <Upload />
  },
  {
    path: '/fetch', element: <Fetch />
  },
])

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App