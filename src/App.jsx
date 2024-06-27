import { useState } from 'react'
import './App.css'
import TaskBoard from './components/TaskBoard/TaskBoard'
import { tasks } from './data/mockData'


function App() {
  return < TaskBoard tasks = {tasks}/>
}

export default App
