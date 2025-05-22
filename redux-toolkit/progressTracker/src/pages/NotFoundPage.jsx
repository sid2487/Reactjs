import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h2>404 - Page not Found</h2>
        <Link to={"/"}>Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage