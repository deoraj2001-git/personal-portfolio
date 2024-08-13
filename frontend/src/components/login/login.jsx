// import {useAlert} from "react-alert";
// import { Button, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../actions/user';
// import "./login.css"

// const Login = () => {

// const [email,setEmail] = useState("")
// const [password,setPassword] = useState("");

// const dispatch = useDispatch();
// const alert = useAlert();

// const {loading,message,error}=useSelector((state)=>state.login)

// const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(login(email,password));
// }

// useEffect(() => {
//     if(error){
//         alert.error(error);
//         dispatch({type:"CLEAR_ERRORS"});
//     }
//     if(message){
//         alert.success(message);
//         dispatch({type:"CLEAR_MESSAGE"});
//     }
// }, [alert,error,message,dispatch])

//   return (
//     <div className='login'>

//         <div className='loginContainer'>
//             <form className='loginForm' onSubmit={submitHandler}>
//                 <Typography variant='h4'>
//                     <p>A</p>
//                     <p>D</p>
//                     <p>M</p>
//                     <p>I</p>
//                     <p style={{marginRight:"1vmax"}}>N</p>

//                     <p>P</p>
//                     <p>A</p>
//                     <p>N</p>
//                     <p>E</p>
//                     <p>L</p>
//                 </Typography>
//                 <div>
//                     <input
//                         type="email"
//                         required
//                         placeholder='Admin Email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         required
//                         placeholder='Admin Password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button type='submit' variant='contained' disabled={loading}>Login</Button>
//                 </div>
//             </form>
//         </div>

//     </div>
//   )
// }

// export default Login;

import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>
          <div>
            <input
              type="email"
              required
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Add this component to display the toasts */}
    </div>
  );
};

export default Login;
