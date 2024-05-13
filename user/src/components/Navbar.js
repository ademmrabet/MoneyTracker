import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>logo</li>
            <li>Calculator</li>
            <li>Wallet</li>
            <li>Budgets</li>
            <li>Transactions</li>
            <li className='login-btn'><button>Login</button></li>
            <li className='signup-btn'><button>signup</button></li>
            <li className='profile'>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar