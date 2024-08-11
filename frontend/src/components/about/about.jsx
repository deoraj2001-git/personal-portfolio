import { Typography } from '@mui/material';
import React from 'react'
import "./about.css"
import pic from "../photos/d6.jpg";

const About = () => {
  return (
    <div className='about'>
        <div className='aboutContainer'>
            <Typography>This is a sample quote</Typography>
        </div>
        <div className='aboutContainer2'>
            <div>
                <img src={pic} alt='My Avatar' className='aboutAvatar'/>
                <Typography variant='h4' style={{margin:"1vmax 0"}}> Deoraj </Typography>
                <Typography > Full Stack Developer </Typography>
                <Typography style={{margin:"1vmax 0"}}>Problem Solver</Typography>
                <Typography >BlockChian enthusiast</Typography>

            </div>
            <div>
                <Typography style={{
                    wordSpacing:"5px",
                    lineHeight:"50px",
                    letterSpacing:"5px",
                    textAlign:"right"
                }}>I am a software Developer,i like to spend time with different different type of technologies.I am very passionate towards Competitive programming.I also like AI and web3,and whenever i will get the opportunities to work with these technologies, i must.</Typography>
            </div>
        </div>
    </div>
  )
}

export default About;