import React, { useEffect, useRef, useState, useContext} from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../redux/api/user/user'
import { handleNavClickDelay } from "../../../utils/handleNavClickDelay";
import "./styles.css"
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';
import FormFieldInput from '../../inputs/FormFieldInput';
import { Context as AuthContext } from '../../../contexts/AuthContext';


const LoginForm = () => {
  const { signIn } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );
  const dispatch = useDispatch();

  const loginForm = useRef(null);
  const [ login ] = useLoginMutation();
  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }

  const onChangePasswordHandler=(e)=>{
    e.preventDefault();
    //setPassword(loginForm.current.password.value)
    dispatch(setError(""))  
  }

  const handleSubmit = (e) => {
    e.preventDefault();  
    const password = loginForm.current?.password?.value;
     
    console.log(login)
    login({email : email ,password: password})
    .then((response)=>{
      if(response.error){
        if(response.error.originalStatus == 423 && !response?.error?.data?.message ){
          dispatch(setError("Account is locked, use forget account to access acount"));
        }
        else{
          console.log(response)
          console.log(JSON.stringify(response))
          
        
          console.log(response.error)
          console.log(JSON.stringify(response.error))
          dispatch(setError(response.error.data.message))

        }

      }
      else{

        console.log("logging in ..............")
        console.log(response.data)
        console.log("before storage of token using signIn",response.data.accessToken)

        signIn(response.data.accessToken)
      console.log("after from storage == ",localStorage.getItem(process.env.REACT_APP_AUTH_KEY))
      navigate("/dashboard",{ state : response.data})
      }

    })
    .catch((response)=>{
      alert(JSON.stringify(response))
      console.log(response)
      console.log(JSON.stringify(response))
    })
  }
    return (
      <div className='container contact-grids wow bounceIn animated' style={{backgroundColor:"black"}}>
        <div className="text-center py-4">
          <h1 className="text-7xl font-semibold text"
          style={{

            textAlign: 'center',
            textShadowColor: 'gold',
            textShadowRadius: 20,
            color:"gold"
        
          }}
          
          >Login</h1>
          <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"gold" }}>
            Please login to access our services
          </p>
        </div>
        <form onSubmit={handleSubmit} ref={loginForm}>
        <FormFieldInput containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} value={email}
                  inputClassName="bg-transparent w-full outline-none" type="text" placeholder="email" onChange={onChangeEmailHandler}
                  iconClassName="fa fa-envelope fa-md" />

      <FormFieldInput containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="password"
                  inputClassName="bg-transparent w-full outline-none" type="password" placeholder="password" 
                  iconClassName="fa fa-lock fa-lg" required={true}  onChange={onChangePasswordHandler}/>
          <div className="pb-4 text-sm flex items-center justify-between">
            <p onClick={()=>handleNavClickDelay("/forgotpassword",1000,navigate,true, {email : email})}  style={{fontStyle:"italic",cursor: "pointer",color:"gold" }}>Forgot password?</p>
            <p onClick={()=>handleNavClickDelay("/resetpassword",1000,navigate,true, {email : email})} className="font-semibold underline" style={{fontStyle:"italic",cursor: "pointer",color:"gold"}}
              >Change Password</p>
        </div>

          <button className="bg- text-white rounded-lg w-full p-2 mb-4" style={{backgroundColor:"gold",color:"black"}}>Login</button>
        
        </form>
        
      </div>
    );

  }

export default LoginForm;