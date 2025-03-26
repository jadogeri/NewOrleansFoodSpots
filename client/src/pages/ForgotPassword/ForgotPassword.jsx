import React, {useRef, useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import ForgotPasswordForm from '../../components/form/ForgotPasswordForm/ForgotPasswordForm';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./styles.css"
import Spacer from '../../components/Spacer';

import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";


const ForgotPassword = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);

  const errorMessage = useSelector(selectSessionError)



  return (
    <div style={{backgroundColor: "black"}}>
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      

      <div className="lg:w-[40%]">
  
      <ForgotPasswordForm /> 

        <div className="flex items-center space-x-4">
     
        </div>
        <Spacer marginBottom={5}/>

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



export default ForgotPassword


