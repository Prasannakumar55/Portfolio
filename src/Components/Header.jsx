import React from 'react';
import '../App.css';
 

const Header = () => {
  return (
    <div className='Head'>
    <br/>
    <div>
    <div className='Name'>
      <p>Hi, i am Prasanna Kumar</p>
      <h2>A Full Stack Devloper</h2>
    </div> <br/>

    <div className='Buttons'>
      <p>Get ready to turn into reality</p>
      <button id='Btn1'>Hire Me</button>
      <button id='Btn2'>Get Resume</button>
    </div>
    </div>
    <img className='imgs'></img>
    </div>
  )
}

export default Header
