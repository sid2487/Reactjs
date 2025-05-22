import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const ProgressPage = () => {
  return (
    <div>
        <h1>Your tasks and progres</h1>
        <TaskForm />
        <TaskList />
    </div>
  )
}

export default ProgressPage