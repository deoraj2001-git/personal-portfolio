import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>

    
      <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
          Hey, Myself Deoraj Maharaj.I am a <b>full-Stack Developer</b>.I like Problem Solving and am also a <b>blockchain</b> enthusiastic. 
        </Typography>
        <Link to="/contact" className='footerContactBtn'>
          <Typography>Contact Us</Typography>
        </Link>
      </div>




      <div>

      <Typography variant='h6'>Social Media</Typography>
      <a href='www.linkedin.com/in/deoraj-maharaj-a49108221' target="blank">
        <BsLinkedin />
      </a>
      <a href='https://github.com/deoraj2001-git' target="blank">
        <BsGithub />
      </a>
      <a href='https://www.instagram.com/dev_raj8617/' target="blank">
        <BsInstagram />
      </a>

      </div>
    </div>
  )
}

export default Footer;