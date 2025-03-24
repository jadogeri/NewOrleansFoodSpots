import React, {useRef, useState} from 'react'
import InputField from '../../input/FormFieldInput';
import img from "../../../assets/villainImages/PredatorHome.jpg"
import { handleNavClickDelay } from '../../../handleNavClickDelay';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useResetPasswordMutation } from '../../../redux/api/user';
import ResetPasswordModal from '../../modals/ResetPasswordModal';
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';
import "./styles.css"
import {openModal} from "../../../utils/htmlUtil/openModal"

const ResetPasswordForm = () => {
  const navigate = useNavigate();

 const resetPasswordFormRef = useRef("");
  
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );

  const [resetPassword] = useResetPasswordMutation();
  const [resData, setResdata] = useState("")
  const dispatch = useDispatch();




  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
    dispatch(setError(""));

  }
  
  
  const onChangePasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""));

  } 

  const onChangeNewPasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""));
      
  }
  const onChangeConfirmPasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""));    
      
  }


 // When the user clicks on the password field, show the message box
const onFocusHandler = function(current_className,other_className) {
  document.getElementById(current_className).style.display = "block";
  document.getElementById(other_className).style.display = "none";
}

// When the user clicks outside of the password field, hide the message box
const onBlurHandler = function(current_className) {
  document.getElementById(current_className).style.display = "none";
}

  const handleSubmit = (e) => {
    e.preventDefault()
    const current_password = resetPasswordFormRef.current.current_password.value
    const new_password = resetPasswordFormRef.current.new_password.value
    const confirm_password = resetPasswordFormRef.current.confirm_password.value

  
    if(new_password !== confirm_password){
      dispatch(setError('new and confirm passwords don\'t match!'));

    }
    else{    

    resetPassword({	email, new_password,current_password})
    .then((response) => {		
  
      if(response.error){

        dispatch(setError(response.error.data.message))
    
      }else{
        openModal("resetPassword") 

      }
     
    })
  

  }

}

  return (
    <>
    <ResetPasswordModal id="resetPassword"/>
    <div className='container'>
      <div className="text-center py-4">
        <h1 className="text-7xl font-semibold text"
         style={{

          textAlign: 'center',
          textShadowColor: 'green',
          textShadowRadius: 20,
          color:"green"
      
        }}
        
        >Change Password</h1>
        <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"green" }}>
          please create account to access our services
        </p>
      </div>
      <form onSubmit={handleSubmit} ref={resetPasswordFormRef}>
        <InputField containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2"  onChange={onChangeEmailHandler}
                    inputClassName="bg-transparent w-full outline-none" type="text" placeholder="email" value={email} required={true}
                    iconClassName="fa fa-envelope fa-md" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="current_password"
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="current password" required={true}
                    iconClassName="fa fa-lock fa-lg"  onChange={onChangePasswordHandler}/>

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="new_password"
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="new password" required={true}
                    iconClassName="fa fa-lock fa-lg" onChange={onChangeNewPasswordHandler}/>

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="confirm_password"
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="confirm password" required={true}
                    iconClassName="fa fa-lock fa-lg" onChange={onChangeConfirmPasswordHandler}/>


        <button className="bg-black text-white rounded-lg w-full p-2 mb-4" 
        style={{fontStyle: "italic",fontWeight: "bold",backgroundColor:"green" }}>Change Password</button>
        <div>res data === {resData}</div>
      </form>
    </div>
          <div className="pb-4 text-sm flex items-center justify-between">
          <p  style={{fontStyle:"italic",cursor: "pointer",color:"green"}}>Remember Password?</p>
          <button onClick={()=>{ dispatch(setError(""));handleNavClickDelay("/login",1000,navigate, true,{email : email})}} className="font-semibold underline"
            style={{fontStyle:"italic",cursor: "pointer",color:"green"}}
            
            >Login</button>
      </div>
    </>
  );
};

export default ResetPasswordForm  