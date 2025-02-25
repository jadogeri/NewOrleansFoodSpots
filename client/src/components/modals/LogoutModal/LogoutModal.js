import React from "react";
import "./styles.css"

import { closeModal } from "../../../utils/htmlUtil/closeModal";
// import { openModal } from "../../utils/htmlUtil/openModal";




const LogoutModal = (props) => {


  return (
    


<div id={props.id} className="logout-modal">
  <span onClick={()=>closeModal(props.id)} className="close" title="Close Modal">×</span>
  <form className="logout-modal-content" style={{width:600, textAlign :"center"}}>
    <div className="logout-container clearfix">
      <h1>Logout Account</h1>

      <h6>Are you sure you want to Logout?</h6>
    
      <div style={{width:600, textAlign :"center", marginLeft:"25%"}}>
  
        {/* <button type="button" onclick="document.getElementById('id01').style.display='block'" class="cancelbtn">Cancel</button>
        <button type="button" onclick="document.getElementById('id01').style.display='block'" class="deletebtn">Delete</button> */}
        <button style={{width:150,textAlign:"center"}} type="button" onClick={()=>{closeModal("logoutModal")}} 
                title="Cancel" className="cancelbtn"></button>
        <button style={{width:150}} type="button" onClick={props.logoutHandler} 
                title="logout" className="deletebtn"></button>
      </div>
    </div>
  </form>
</div>
  );
};

export default LogoutModal;







