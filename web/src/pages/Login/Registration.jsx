import React, { useState } from "react";
import img from "../../assets/food_pics/food1.jpg"
import LoginForm from "../../components/form/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { handleNavClickDelay } from "../../handleNavClickDelay";

export const Registration = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      <div className="lg:w-[40%]">

      <LoginForm />
        <div className="pb-4 text-sm flex items-center justify-between">
            <p>Don't have an account?</p>
            <button onClick={()=>handleNavClickDelay("/register",2500,navigate,true,setIsActive)} className="font-semibold underline">Sign up</button>
        </div>
        <div className="flex items-center space-x-4">
          <hr className="w-full" />
          <p className="shrink-0">Login with Others</p>
          <hr className="w-full" />
        </div>
        <div className="my-4 flex items-center justify-center border border-black rounded-lg space-x-1 p-2">
          {/* <FaGoogle /> */}
          
          <p>Sign in with Google</p>
        </div>
        <div className="flex items-center justify-center border border-black rounded-lg space-x-1 p-2">
          {/* <FaFacebookF /> */}
          <p>Sign in with Facebook</p>
        </div>
      </div>

      <div className="w-1/2 hidden lg:block">
        {/* <img className="rounded-2xl"  alt=""  src={boy}/> */}
        <img className="rounded-2xl"  alt=""  src={img}/>

      </div>
    </div>
  );
};


export default Registration