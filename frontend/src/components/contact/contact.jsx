import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import "./contact.css";

const Contact = () => {
    const [name,setName]=useState("");
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")
    const contactFormHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='contact'>
    <div className='contactRightBar'>

    </div>
    <div className='contactContainer'>
        <form className='contactContainerForm' onSubmit={contactFormHandler}>
            <Typography variant='h4' >Contact Us</Typography>
            <input 
            type="text" placeholder='name' required
                value={name} onChange={(e)=> setName(e.target.value)}
            />
            <input type="email" placeholder='email' required
                   value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <textarea placeholder='Message' cols="30" rows="10" required
               value={message} onChange={(e)=> setMessage(e.target.value)}
            ></textarea>
            <Button variant='contained' type='submit'>Send</Button>
        </form>
    </div>
    </div>
  )
}

export default Contact