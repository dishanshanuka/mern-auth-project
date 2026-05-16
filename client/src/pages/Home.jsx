import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 overflow-hidden relative'>
        
        {/* Background decorative glows */}
        <div className='absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -top-20 -left-20'></div>
        <div className='absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -bottom-20 -right-20'></div>

        <Navbar />
        <Header />
        
    </div>
  )
}

export default Home