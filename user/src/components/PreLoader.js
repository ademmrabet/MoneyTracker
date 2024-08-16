import React, { useEffect } from 'react'
import './components.scss';
import { preLoaderAnim } from '../animations';

function PreLoader() {

        useEffect(()=>{
            preLoaderAnim()
        },[])
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Budget,</span>
            <span>Monitor,</span>
            <span>Grow.</span>
        </div>
    </div>
  )
}

export default PreLoader