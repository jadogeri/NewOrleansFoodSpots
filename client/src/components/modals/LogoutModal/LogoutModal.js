import React from "react";
import "./styles.css"
import { closeModal } from "../../../utils/html/closeModal";
import { useLogoutMutation } from "../../../redux/api/user/user";
import { useNavigate } from "react-router-dom";
import { selectSessionState } from "../../../redux/feature/session/sessionSlice";
import { useSelector, useDispatch } from "react-redux";
import { setLogoutStatus } from "../../../redux/feature/session/sessionSlice";


const LogoutModal = ({

}) => {
  const [ logout ] = useLogoutMutation();
  const state =useSelector(selectSessionState)
  const dispatch = useDispatch()
  let token= state.token
  const navigate = useNavigate();
const id="logoutModal"

  const handleLogout = () =>{
    
    if(!token){
      dispatch(setLogoutStatus());
       navigate("/login")

   
    }else{
    try{
      console.log("token needed to logout ===",token)
    logout(token)
    .then((response)=>{
      closeModal("logoutModal");
      dispatch(setLogoutStatus());
      navigate("/login")
    })
    .catch((e)=>{
      console.log(e)
      alert(e)

    })
   
  }catch(e){
    console.log(e)
  }}

  }




  return (
    


<div id={id} className="logout-modal">
  <span onClick={()=>closeModal(id)} className="close" title="Close Modal">×</span>
  <form className="logout-modal-content" style={{width:600, textAlign :"center"}}>
    <div className="logout-container clearfix">
      <h1>Logout Account</h1>

      <h6>Are you sure you want to Logout?</h6>
    
      <div style={{width:600, textAlign :"center", marginLeft:"25%"}}>
  
        <button type="button" onClick={()=>{closeModal("logoutModal")}} className="cancelbtn">Cancel</button>
        <button type="button" onClick={()=>{handleLogout()}} className="deletebtn">Logout</button>
      </div>
    </div>
  </form>
</div>
  );
};

export default LogoutModal;



