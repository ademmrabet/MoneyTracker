import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreLoader from './components/PreLoader';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <PreLoader/>
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
