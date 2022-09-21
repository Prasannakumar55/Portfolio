import React from 'react'
import './Myport.css';

const Contact = () => {
    return (
        <div className='Contact'>
            <h1>Contact Me</h1> <hr /> <br />
        <div className='Contact1'>
            <div className='Address'>
            <h2>Let's connect</h2>
            <p>I am from Telangana state and i will <br/> 
            stay in Khammam.I will be avaliable on <br/>
            my mail and my phone,You can Contact <br/>
            me at any time. Ready to relocate.</p>
            <p>Email : prasannakumar55.pk7@gmail.com <br/>   <br/>   
               Mobile : 91-8008778114 <br/>   <br/>   
               Location : Khammam</p>
            </div>
            <div className='form'> <br/>
                <h2>Send Me a Message</h2>
                First & Last Name <br/> 
                <input type='text'></input><br/> <br/>
                Phone Number <br/>
                <input type='number'></input> <br/> <br/>
                Email Address <br/>
                <input type='email'></input> <br/> <br/>
                Message <br/>
                <input type='text'></input> <br/> <br/>
                <button>Send Message</button> <br/><br/>
            </div>
            </div>
        </div>
    )
}

export default Contact
