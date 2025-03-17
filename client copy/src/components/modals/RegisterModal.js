
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { closeModal } from '../../utils/htmlUtil/closeModal';
import "./styles.css"


const RegisterModal = (props) => {
    const navigate = useNavigate();
  return (
    <div id="register" className="modal" >
  
  <form className="modal-content animate " style={{width:"50%",backgroundColor:"black"}} >
    <div className="imgcontainer ">

      <img src={require("../../assets/villainImages/PredatorHome.jpg")} alt="Avatar" className="avatar center-container" style={{height :200,width:200}}/>
    </div>
    <h2 style={{color:"green"}}  className="center-container  text-center">Register</h2>
    <p style={{color:"green"}}   >Successful , account has been created
    </p>

    <div className="container">       
        
      <button className="center-container  "  type="submit"  style={{backgroundColor:"green",width:"100%"}}  onClick={()=>{navigate("/login")}}>GO TO SIGN IN SCREEN</button>
   
    </div>


  </form>
</div> 
  )
}

export default RegisterModal