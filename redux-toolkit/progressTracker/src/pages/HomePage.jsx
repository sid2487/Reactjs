import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to Progress Tracker RTK</h1>
        <Link to={"/tasks"}>Go to Tasks</Link>
    </div>
  )
}

export default HomePage