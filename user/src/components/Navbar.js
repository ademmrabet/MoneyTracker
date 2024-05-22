import React from 'react'
import logo from '../assets/logo.png'
import money from '../assets/money-logo.png'
import searchDark from '../assets/search-black.png'
import searchLight from '../assets/search-white.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={money} alt='money logo' className='logo' />
      <ul>
        <li>Wallet</li>
        <li>Spendings</li>
        <li>Budgets</li>
        <li>Reports</li>
      </ul>

      <div className='serch-box'>
        <input type='text' placeholder='Search'/>
        <img src={searchDark} alt=''/>
      </div>

      <img src={logo} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar