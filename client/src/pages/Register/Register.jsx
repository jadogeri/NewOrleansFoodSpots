import React, {useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import RegisterForm from '../../components/form/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { handleNavClickDelay } from '../../handleNavClickDelay';
import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";


const Register = () => {
  const errorMessage = useSelector(selectSessionError)
  const navigate = useNavigate();

  return (
    <div  style={{backgroundColor:"black"}} >

    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      
      <div className="lg:w-[40%]"     style={{
        marginBottom :20
      }}>
   

      <RegisterForm />
        <div className="pb-4 text-sm flex items-center justify-between">
            <p style={{color:"green"}}>Already have an account?</p>
            <button onClick={()=>handleNavClickDelay("/login",1000,navigate, true)} className="font-semibold underline"
              style={{color:"green"}}>Login</button>
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



export default Register