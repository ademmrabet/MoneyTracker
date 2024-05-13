import React from 'react'
import './component.css'

function LandingPage() {
  return (
    <div>
      <div className="welcome">
        <h1>Greetings User!</h1>
        <p>This is your remaining Budget for the week!</p>
        <p>and here is few tips based on your recent data!</p>
      </div>
      <div className="data">
        <div className='graph-container'>
          <h2>you will find below your updated graphics</h2>
        </div>
        <div className='recent-transactions'>
          <h2>Your recent Transactions</h2>
        </div>
      </div>
    </div>
  )
}

export default LandingPage