import React from 'react'
import NavLogo from '../assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import './components.scss'

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className='Navigation-bar'>
        <div className='logo'>
            <img src={NavLogo} alt='Logo' />
            <NavLink to="/"><span>Knou</span>z.</NavLink>
        </div>
        <div className='menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/partners'>Partners</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
        </div>
        <div className='buttons'>
            <button className='login-btn' onClick={()=>{ navigate('/login')}}>Login</button>
            <button className='signup-btn' onClick={()=>{ navigate('/signup')}}>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar