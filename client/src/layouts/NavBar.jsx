import React from 'react'
import { openTab } from '../utils/htmlUtil/openTab'
import { w3_open } from '../utils/htmlUtil/w3_open';
import { closeAllViews } from '../utils/htmlUtil/closeAllViews';
import { useLogoutMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const [logout] = useLogoutMutation();
  const auth = JSON.parse(localStorage.getItem("AUTHKEY"));
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor :"black"}} >
    <div className="w3-top" style={{backgroundColor :"black"}}>
    <div className="w3-bar w3-black w3-card" id="myNavbar" style={{backgroundColor :"black"}}>
    {/* <img className="w3-bar w3-black w3-card"
    style={{backgroundColor :"green",width:100,height:200}} src={require("../assets/villainImages/PredatorHome.jpg")}/> */}

      <a href="#home" className="w3-bar-item w3-button w3-wide" style={{backgroundColor :"red"}}
     >
        {/* <img src={require("../assets/villainImages/PredatorHome.jpg")} className="w3-bar-item w3-button w3-wide"  alt="logo"  /> */}
        logo
      </a>
      {/* Right-sided navbar links */}
      <div className="w3-right w3-hide-small tab" style={{backgroundColor :"black"}}>
      <a href="#game" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
       onClick={(event)=>{openTab(event, 'game') }}>
         <i className="fa fa-gamepad" style={{backgroundColor :"green"}}/> GAME
        </a>
        <a href="#about" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'about');closeAllViews();}}>
           <i className="fa fa-regular fa-exclamation" style={{backgroundColor :"green"}}/>ABOUT
        </a>

        <a href="#credits" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'credits');closeAllViews();}}>
          <i className="fa fa-th" style={{backgroundColor :"green"}}/> CREDITS
        </a>
        <a href="#contact" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'contact');closeAllViews();}}>
          <i className="fa fa-envelope" style={{backgroundColor :"green"}} /> CONTACT
        </a>
        <a href="#team" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"blue"}}
        onClick={(event)=>{openTab(event, 'team');closeAllViews();}}>
          <i className="fa fa-user" style={{paddingLeft: 10}}/> {auth?.username?.substring(0,1) }
        </a>
        <a onClick={()=>{
      logout({token : auth.token })
      .then((response)=>{
        if(response.error){
          localStorage.removeItem("AUTHKEY")
          navigate("/login");

        }else{
          localStorage.removeItem("AUTHKEY")
          navigate("/login");

        }
      })
      
    }}  className="w3-bar-item w3-button" style={{backgroundColor:"gray"}}>
      LOGOUT 
    </a>
      </div>
      {/* Hide right-floated links on small screens and replace them with a menu icon */}
      <a
        //href="javascript:void(0)"
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </a>
    </div>
  </div>
  </div>
  )
}

export default NavBar

