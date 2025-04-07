import React, { useState, useEffect, useReducer } from 'react';
import "./styles.css"
import { closeModal } from "../../../utils/html/closeModal";
import { useLogoutMutation } from "../../../redux/api/user/user";
import { useNavigate } from "react-router-dom";
import { selectSessionState } from "../../../redux/feature/session/sessionSlice";
import { useSelector, useDispatch } from "react-redux";
import { setLogoutStatus } from "../../../redux/feature/session/sessionSlice";

const UnAuthorizedModal = ({

}) => {
  const el = document.getElementById("unauthorized-modal");
  const [seconds, setSeconds] = useState(20);
  const state =useSelector(selectSessionState)
  console.log("Sttsweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", state)

  const dispatch = useDispatch()
  let token= state.token
  console.log("tokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkken", token)
  const navigate = useNavigate();
  //const [, forceUpdate] = useReducer(x => x + 1, 0);


useEffect(() => {
  if (seconds > 0) {
    const timer = setTimeout(() => {

      setSeconds(seconds - 1);
    }, 1000);
    return () => clearTimeout(timer); // Clear timeout if component unmounts or seconds change
  } else {
    // Timer has reached 0, perform action here (e.g., show a message)
    console.log("Countdown finished!");
    if( el.style.display == "block"){
    handleLogout().
    then(()=>{
      dispatch(setLogoutStatus());
    }).then(()=>{
      closeAuthModal()

    }).then(()=>{
      navigate("/login")

    })
    //forceUpdate()
    }
  }

}, [seconds]);

  const closeAuthModal = async ()=>{
    el.style.display = "none"
  }
  const handleLogout = async () =>{    

    dispatch(setLogoutStatus()); 

  }

  return (
    


<div id="unauthorized-modal">
  
  {/* <span onClick={()=>closeModal(id)} className="close" title="Close Modal">×</span> */}
  <form className="logout-modal-content" style={{width:600, textAlign :"center"}}>
    <div className="logout-container clearfix">
      <h1>Session Timeout</h1>

      <h6>Your session to the app expired , you will be logged out automatically</h6>
      <h1></h1>


      <div>
      
        <h6>You will be logged out in {seconds} seconds</h6>
    </div>
    
      <div style={{width:600, textAlign :"center", marginLeft:"25%"}}>
  
        {/* <button type="button" onClick={()=>{closeModal("logoutModal")}} className="cancelbtn">Cancel</button> */}
        {/* <button type="button" onClick={()=>{handleLogout()}} className="deletebtn">Logout</button> */}
      </div>
    </div>
  </form>
</div>
  );
};

export default UnAuthorizedModal;






/**
 * 
 * 
 * 
 * 
 * 
 * 


import React, { useState, useEffect } from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or seconds change
    } else {
      // Timer has reached 0, perform action here (e.g., show a message)
      console.log("Countdown finished!");
    }
  }, [seconds]);

  return (
    <div>
      <h1>Countdown: {seconds}</h1>
    </div>
  );
}


import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      {isVisible ? (
        <p>This message appeared after 10 seconds.</p>
      ) : (
        <p>Waiting for 10 seconds...</p>
      )}
    </div>
  );
}















 



 
 */
