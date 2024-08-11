import { Button, Typography } from '@mui/material';
import React from 'react'
import "./projects.css"
import {AiOutlineProject} from "react-icons/ai"
import { Delete } from '@mui/icons-material';
import i1 from "../photos/i1.jpg";
// import i2 from "../photos/i2.jpg";
// import i3 from "../photos/i3.jpg";
import { FaRegSmileWink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../../actions/user';

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
    }) => {


        const dispatch = useDispatch();

        const deleteHandler = async(id) => {
          await dispatch(deleteProject(id));
          dispatch(getUser());
        }


    return (
        <>
            <a href={url} className='projectCard'>
                <div>
                    <img src={projectImage} alt="Project"/>
                    <Typography variant="h5" >{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack:{technologies}</Typography>
                </div>
            </a>
            {
                isAdmin && (
                    <Button style={{color:"rgba(40,40,40,0.7)"}} onClick={()=>deleteHandler(id)}>
                        <Delete />
                    </Button>
                )
            }
        </>
    )
}

const Projects = () => {

    const projects = [1,2,3];

  return (
    <div className='projects'>
    
   <Typography variant='h3'>
    Projects <AiOutlineProject />
   </Typography> 

   <div className='projectsWrapper'>
    {projects.map((project,index)=>(
        <ProjectCard 
            url="https://github.com/deoraj2001-git"
    projectImage={i1}
    projectTitle="Sample Image"
    description="This was my first project. I did this with a zero base knowledge. But anyway it prepared in a very well manner."
    technologies="React, Mongodb, Nodejs, CSS"
         />
    ))}
   </div>
        <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono'"}} >All the Projects Shown Above Are Made By Me <FaRegSmileWink /> </Typography>
    </div>
  )
}

export default Projects;