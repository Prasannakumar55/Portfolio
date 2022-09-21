import React from 'react';
import '../App.css';

const AboutMe = () => {
  return (
    
    <div className='About'>  
    <img className='img2'></img>
      <div className='About1'>
        <h1 >About Me</h1><hr/>
        <p>
        I'm a Full-Stack-developer.Completed training and learning skills in PREPBYTES for 6 months.I am familiar with languages, Library's and technologies like HTML,CSS,JAVASCRIPT,REACT,REDUX,NODE.JS,MONGODB for web applications or the web page designs.My main focus is on giving the best user experience with all my skills and creativity.I am more passionate on the web applications and web designs. 
        </p>
        <p>
        I enjoy working on the complex problems or the designs. I will learn new skills from experience developer and i will work on it to resolve the problem in a simple way.With all my skills,creativity,passion of learning new technologies i wanna build a real-time project according to the new technologies.
        </p> <br/>
        <div className='LLT'>
        <p>Languages/Library/Technology</p>
        <div className='languages'>
           <img className='Html'/>
           <img className='Css'/>
           <img className='Java'/>
           <img className='Netlify'/>
           <img className='BootStrap'/>
           <img className='React'/>
           <img className='Hithub'/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
