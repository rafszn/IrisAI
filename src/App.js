import React from 'react'
import SignIn from './SignIn'
import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import DetectES from './DetectES'

const App = () => {
  return (
   <Routes>
    <Route path='/' exact element={<SignIn/>} />
    <Route path='welcome' element={<Welcome/>} />
    <Route path='tests' element={<DetectES/>} />
   </Routes>
  )
}

export default App