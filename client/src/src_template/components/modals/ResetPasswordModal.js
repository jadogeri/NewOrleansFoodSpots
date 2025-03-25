
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { closeModal } from '../../utils/htmlUtil/closeModal';
import "./styles.css"


const ResetPasswordModal = (props) => {
    const navigate = useNavigate();
  return (
    <div id="resetPassword" className="modal" >
  
  <form className="modal-content animate " style={{width:"50%",backgroundColor:"black"}} >
    <div className="imgcontainer ">
    <span onClick={()=>closeModal(props.id)} className="close" style={{color:"red",fontSize:30,alignSelf:"center",justifyContent:"center", cursor:"pointer"}}>&times;</span>            

      <img src={require("../../assets/villainImages/PredatorHome.jpg")} alt="Avatar" className="avatar center-container" style={{height :200,width:200}}/>
    </div>
    <h2 style={{color:"green"}}  className="center-container  ">Password Change </h2>
    <p style={{color:"green"}}   >Successful , password has been changed
    </p>

    <div className="container">       
        
      <button className="center-container  "  type="submit"  style={{backgroundColor:"green",width:"100%"}}  onClick={()=>{navigate("/login")}}>GO TO SIGN IN SCREEN</button>
   
    </div>


  </form>
</div> 
  )
}

export default ResetPasswordModal