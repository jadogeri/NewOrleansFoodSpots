import React, {useRef, useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import ResetPasswordForm from '../../components/form/ResetPasswordForm/ResetPasswordForm';
import {useLocation, useNavigate } from 'react-router-dom'
import "./styles.css"
import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";

const ResetPassword = () => {
  const errorMessage = useSelector(selectSessionError)
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);
 const registerForm = useRef("");
  
  const location = useLocation();
  const [email, setUsername] = useState(location.state?.email );
 
  return (
    <div style={{backgroundColor:"black"}}>
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
 
      <div className="lg:w-[40%]">
      {/* {isLogin ? <Login /> : <Signup />} */}

      {/* <UserData /> */}
      <ResetPasswordForm /> 
    
        <div className="flex items-center space-x-4">
     
        </div>

        {
          errorMessage.length === 0?<p style={{display:"block"}}>.</p>: <p style={{color :"red",display:"block"}}>{errorMessage}</p>
        }
      </div>

      

      <div className="w-1/2 hidden lg:block">
        {/* <img className="rounded-2xl"  alt=""  src={boy}/> */}
        <img className="rounded-2xl"  alt=""  src={img}/>

      </div>
    </div>
    </div>
  );
};



export default ResetPassword


