import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-white'>
        
        {/* Profile Image - Using a reliable online placeholder avatar */}
        <div className='relative group'>
            <img 
                src='https://avatar.iran.liara.run/public/32' 
                alt="Profile" 
                className='w-32 h-32 rounded-full mb-6 border border-white/10 p-1 shadow-2xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-500' 
            />
            <div className='absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
        </div>

        {/* Welcome Text with Emoji (No separate image needed) */}
        <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
            Hey Developer! <span className='animate-bounce'>👋</span>
        </h1>

        {/* Main Title using Tailwind v4 Linear Gradient */}
        <h2 className='text-3xl sm:text-5xl font-semibold mb-4 leading-tight'>
            Welcome to <span className='bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>D-Auth Nexus</span>
        </h2>

        {/* Description: High-end typography */}
        <p className='mb-8 max-w-md text-white/60 font-light tracking-wide leading-relaxed'>
            Experience the next generation of authentication. Secure, fast, and minimalist design tailored for modern developers.
        </p>

        {/* Apple Style CTA Button */}
        <button className='border border-white/20 px-10 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-500 cursor-pointer active:scale-95 shadow-xl shadow-white/5 uppercase tracking-widest'>
            Explore Features
        </button>
        
    </div>
  )
}

export default Header