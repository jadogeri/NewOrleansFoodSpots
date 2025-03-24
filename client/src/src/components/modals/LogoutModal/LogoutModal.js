import React from "react";
import "./styles.css"

import { closeModal } from "../../../utils/htmlUtil/closeModal";
import { useLogoutMutation } from '../../../redux/api/user'
import { useNavigate } from "react-router-dom";



const LogoutModal = (props) => {
  const [ logout ] = useLogoutMutation();
  const navigate = useNavigate();
  let authString = localStorage.getItem("AUTHKEY");
  let token = ""
  console.log(authString)

  console.log("parsing string ............................")
  let auth = JSON.parse(authString);
  console.log("auth ............................")
  if(auth){
  let {accessToken } = auth
  console.log("token ............................")
  console.log(accessToken)
  token = accessToken

  }

  const handleLogout = () =>{
    
    if(!auth){
      navigate("/login")
    }else{
    try{
    let response = logout(token)

    console.log(response)
    alert(JSON.stringify(response))
    response.then(()=>{
               closeModal("logoutModal");
      localStorage.removeItem("AUTHKEY");
      navigate("/login")
    })
    .catch((e)=>{
      console.log(e)
      alert(e)

    })
         //   closeModal("logoutModal");
    //   localStorage.removeItem("AUTHKEY");
    //   navigate("/login")
    // .then(()=>{
    //   closeModal("logoutModal");
    //   localStorage.removeItem("AUTHKEY");
    //   navigate("/login")
    // })
    // .catch((e)=>{
    //   console.log("printint error .........................................................")
    //   console.log(e)
    // })
  }catch(e){
    console.log(e)
  }}

  }




  return (
    


<div id={props.id} className="logout-modal">
  <span onClick={()=>closeModal(props.id)} className="close" title="Close Modal">×</span>
  <form className="logout-modal-content" style={{width:600, textAlign :"center"}}>
    <div className="logout-container clearfix">
      <h1>Logout Account</h1>

      <h6>Are you sure you want to Logout?</h6>
    
      <div style={{width:600, textAlign :"center", marginLeft:"25%"}}>
  
        <button type="button" onClick={()=>{closeModal("logoutModal")}} className="cancelbtn">Cancel</button>
        <button type="button" onClick={()=>{handleLogout()}} className="deletebtn">Logout</button>
        {/* <button style={{width:150,textAlign:"center"}} type="button" onClick={()=>{closeModal("logoutModal")}} 
                title="Cancel" className="cancelbtn"></button> */}
        <button style={{width:150}} type="button" onClick={props.logoutHandler} 
                title="logout" className="deletebtn"></button>
      </div>
    </div>
  </form>
</div>
  );
};

export default LogoutModal;






/**
 * 
 * 
 * 
 



 const { signIn } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );
  const [password,setPassword] = useState(""); 
  const dispatch = useDispatch();

  const loginForm = useRef(null);
  const [ login ] = useLoginMutation();
  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }

  const onChangePasswordHandler=(e)=>{
    e.preventDefault();
    setPassword(loginForm.current.password.value)
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
        signIn(response.data.accessToken)
      localStorage.setItem("AUTHKEY",JSON.stringify(response.data))
      console.log("from storage == ",localStorage.getItem("AUTHKEY"))
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
      <div className='container' style={{backgroundColor:"black"}}>
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
        
 */
