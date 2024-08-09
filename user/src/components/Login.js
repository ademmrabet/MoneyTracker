import React from 'react'
import './components.scss';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import '../App.js'

function Login() {
  return (
    <div className="container">
        <form>
      <MDBRow className='test'>
        <MDBCol>
            <MDBInput id='name' label='First Name' placeholder='First Name'/>
        </MDBCol>
      </MDBRow>
    </form>
    </div>
  )
}

export default Login