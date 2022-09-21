import React from 'react';
import './Myport.css';


const Resume = () => {
  return (
    <div className='Resume'>
    <div className='Work'>
      <h1>Resume</h1> <hr/> <br/>
      <h2>Work Experience</h2> <hr/> <br/>
      <h3>Company : Royal Enfield</h3>
      <p>Role : Spare Parts Incharge</p>
      <p>2020-dec to 2022-march</p>   <br/>

      <h3>Company : prepbytes</h3>
      <p>Role : Full-Stack-Devloper [Under-Trining]</p>
      <p>Joined 2022-April</p>

      <h2>Education</h2> <hr/> <br/>
      <p>Univercity : JNTU Hyderabad</p>
      <p>College : Anurag College of Engineering Hyderabad</p>
      <p>Branch : Bachelor In Mechanical Engineering 2017 to 2020</p>
    </div>
    <img className='Resumeimg'/>
    </div>
  )
}

export default Resume
