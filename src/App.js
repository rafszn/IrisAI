import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import DetectES from './DetectES'

const App = () => {
  return (
   <Routes>
    <Route path='/' exact element={<Welcome/>} />
    <Route path='tests' element={<DetectES/>} />
   </Routes>
  )
}

export default App