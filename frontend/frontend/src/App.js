import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/Signup'
import './App.css'
import Login from './pages/Login'
// import AddNote from './pages/AddNote.js'
import NewAddNote from './pages/NewAddNote.js'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addnewnote" element={<NewAddNote/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
