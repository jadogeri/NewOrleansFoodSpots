import React from 'react'
import { w3_close } from '../utils/htmlUtil/w3_close'
import { useLogoutMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom'
import { openTab } from '../utils/htmlUtil/openTab'
import { w3_open } from '../utils/htmlUtil/w3_open';
import { closeAllViews } from '../utils/htmlUtil/closeAllViews'
import { openGameView } from '../utils/htmlUtil/openGameView'

const SideBar = () => {
  const [logout] = useLogoutMutation();
  const auth = JSON.parse(localStorage.getItem("AUTHKEY"));
  const navigate = useNavigate();
  return (
    <nav
    className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
    style={{ display: "none" }}
    id="mySidebar"
  >
    <a
      //href="javascript:void(0)"
      onClick={()=>{w3_close()

      }}
      className="w3-bar-item w3-button w3-large w3-padding-16 "
    >
      Close ×
    </a>
    <a href="#game"   onClick={(event)=>{//w3_close(); 
       openTab(event, 'game');}}  className="w3-bar-item w3-button tablinks">
      GAME
    </a>

    <a href="#about"   onClick={(event)=>{//w3_close(); 
       openTab(event, 'about');closeAllViews();}}  className="w3-bar-item w3-button tablinks">
      ABOUT 
    </a>
    <a href="#team" onClick={(event)=>{//w3_close(); 
       openTab(event, 'team');closeAllViews();}}  className="w3-bar-item w3-button tablinks">
      TEAM
    </a>
    <a href="#credits" onClick={(event)=>{//w3_close();  
      openTab(event, 'credits');closeAllViews();}}  className="w3-bar-item w3-button tablinks">
      CREDITS
    </a>
    <a href="#contact" onClick={(event)=>{//w3_close(); 
       openTab(event, 'contact');closeAllViews();}}  className="w3-bar-item w3-button tablinks">
      CONTACT 
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
  </nav>
  
  )
}

export default SideBar