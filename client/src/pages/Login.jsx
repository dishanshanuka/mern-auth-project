import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    // State to toggle between Login and Sign Up
    const [state, setState] = useState('Sign Up')

    // Form data states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Form submit handler
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // Backend integration logic goes here
    }

    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-slate-950 relative overflow-hidden font-outfit'>
            
            {/* Background Decorative Glows */}
            <div className='absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -top-10 -right-10'></div>
            <div className='absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -bottom-10 -left-10'></div>

            {/* Login Card with Frosted Glass Effect */}
            <div className='bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl w-full sm:w-96 text-white/90 ring-1 ring-white/5 z-10'>
                
                <h2 className='text-3xl font-semibold text-center mb-3 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent'>
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </h2>
                
                <p className='text-center text-sm mb-6 text-white/50'>
                    {state === 'Sign Up' ? 'Join the nexus today' : 'Welcome back to D-Auth'}
                </p>

                <form onSubmit={onSubmitHandler}>
                    {/* Full Name Input - Only for Sign Up */}
                    {state === 'Sign Up' && (
                        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-white/10 focus-within:border-cyan-500/50 transition-all'>
                            <img src="https://img.icons8.com/material-outlined/24/ffffff/user--v1.png" alt="user" className='w-4 opacity-50' />
                            <input 
                                onChange={e => setName(e.target.value)} 
                                value={name}
                                name="name"
                                className='bg-transparent outline-none text-sm w-full text-white placeholder-white/40' 
                                type="text" 
                                placeholder="Full Name" 
                                required 
                            />
                        </div>
                    )}

                    {/* Email Input */}
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-white/10 focus-within:border-cyan-500/50 transition-all'>
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/mail.png" alt="mail" className='w-4 opacity-50' />
                        <input 
                            onChange={e => setEmail(e.target.value)} 
                            value={email}
                            name="email"
                            className='bg-transparent outline-none text-sm w-full text-white placeholder-white/40' 
                            type="email" 
                            placeholder="Email Address" 
                            required 
                        />
                    </div>

                    {/* Password Input */}
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-white/10 focus-within:border-cyan-500/50 transition-all'>
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/lock.png" alt="lock" className='w-4 opacity-50' />
                        <input 
                            onChange={e => setPassword(e.target.value)} 
                            value={password}
                            name="password"
                            className='bg-transparent outline-none text-sm w-full text-white placeholder-white/40' 
                            type="password" 
                            placeholder="Password" 
                            required 
                        />
                    </div>

                    {/* Forgot password link added here */}
                    {state === 'Login' && (
                        <p 
                            onClick={() => navigate('/reset-password')} 
                            className='text-xs text-cyan-400 mb-4 cursor-pointer hover:underline text-right px-2'
                        >
                            Forgot password?
                        </p>
                    )}

                    <button className='w-full py-3 rounded-full bg-linear-to-r from-cyan-600 to-blue-700 font-medium text-white hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer'>
                        {state}
                    </button>
                </form>

                {/* State Toggle Footer */}
                {state === 'Sign Up' ? (
                    <p className='text-center text-xs mt-6 text-white/40'>
                        Already have an account? {' '}
                        <span onClick={() => setState('Login')} className='text-cyan-400 cursor-pointer hover:underline font-medium'>Login here</span>
                    </p>
                ) : (
                    <p className='text-center text-xs mt-6 text-white/40'>
                        Don't have an account? {' '}
                        <span onClick={() => setState('Sign Up')} className='text-cyan-400 cursor-pointer hover:underline font-medium'>Sign up</span>
                    </p>
                )}
            </div>
        </div>
    )
}

export default Login