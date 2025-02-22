import React, { useState } from "react";
import img from "../../assets/villainImages/predator4.jpg"
import logo from "../../assets/villainImages/PredatorHome.jpg"
import LoginForm from "../../components/form/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { handleNavClickDelay } from "../../handleNavClickDelay";
import "./styles.css"
import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";

const Login = () => {
    const errorMessage1 = useSelector(selectSessionError)
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();



 return(
    <div  style={{backgroundColor:"black"}} >
   <div   className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      
      <div className="lg:w-[40%]" 
      style={{
        marginBottom :30
      }}>
   

     <LoginForm/>
        <div className="pb-4 text-sm flex items-center justify-between">
            <p style={{color:"green"}}className="text">Don't have an account?</p>
            <button onClick={()=>handleNavClickDelay("/register",1000,navigate, true, setIsActive)} className="font-semibold underline"
                style={{color:"green"}}>Sign Up</button>
        </div>
        {
          errorMessage1.length === 0?<p style={{display:"block"}}>.</p>: <p style={{color :"red",display:"block"}}>{errorMessage1}</p>
        }

      </div>     

      <div className="w-1/2 hidden lg:block">
        <img className="rounded-2xl"  alt=""  src={img} style={{borderWidth:1,borderColor:"red", width:"100%",height:670,padding:40}}/>

      </div>
    </div>
    </div>

 )}
 export default Login


