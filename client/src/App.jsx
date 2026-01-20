import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Navbar from './components/Navbar' 

const App = () => {
  return (
    // Main container with a dark background to make the floating navbar visible
    <div className='min-h-screen bg-slate-950 text-white font-outfit relative'>
      
      {/* Navbar placed here to show on every page */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/emailverify' element={<EmailVerify />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App