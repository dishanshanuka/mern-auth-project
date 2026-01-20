import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className='fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50'>
            {/* Main glass container with v4 optimized ring and border colors */}
            <div className='flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5'>
                
                {/* Minimalist with a letter-spacing and glow */}
                <div 
                    onClick={() => navigate('/')} 
                    className='text-xl font-bold tracking-[0.3em] cursor-pointer group'
                >
                    <span className='text-white group-hover:text-cyan-400 transition-all duration-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'>
                        D-AUTH
                    </span>
                    <span className='font-extralight text-white/30 ml-2'>NEXUS</span>
                </div>

                {/* Navigation Items (Hidden on small screens) */}
                <div className='hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50'>
                    <a href="#" className='hover:text-white transition-colors cursor-pointer'>Platform</a>
                    <a href="#" className='hover:text-white transition-colors cursor-pointer'>Security</a>
                    <a href="#" className='hover:text-white transition-colors cursor-pointer'>Docs</a>
                </div>

                {/* Login Button: Glassmorphism style with v4 linear gradient syntax */}
                <button 
                    onClick={() => navigate('/login')}
                    className='relative px-8 py-2.5 text-xs font-bold tracking-widest text-white uppercase overflow-hidden rounded-xl transition-all duration-500 active:scale-95 group cursor-pointer'
                >
                    <span className='relative z-10'>Login</span>
                    {/* Hover state: using bg-linear-to-r for v4 compatibility */}
                    <div className='absolute inset-0 bg-linear-to-r from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    <div className='absolute inset-0 border border-white/10 rounded-xl'></div>
                </button>
                
            </div>
        </nav>
    )
}

export default Navbar