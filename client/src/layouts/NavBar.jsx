import React, {useEffect, useState, useContext} from 'react'
import { closeNavBar } from '../utils/html/closeNavBar'
import { Link } from 'react-router-dom'
import { Context as AuthContext } from '../contexts/AuthContext'
import { openModal } from '../utils/html/openModal'
import LogoutModal from '../components/modals/LogoutModal/LogoutModal'
import { FaLocationDot } from "react-icons/fa6";


const NavBar = () => {
  //const [auth, setAuth] = useState(null);
  const {state, signOut} = useContext(AuthContext)
  const { token : auth} = state
  console.log("state==== ",state)
 // let key = localStorage.getItem(process.env.REACT_APP_AUTH_KEY);
  

  // useEffect(() => {
  //   // Update localStorage whenever the 'name' state changes
  //   if(key){
  //   console.log("calling use effect in NavBar key ==== ",key)
  //   signIn(key)
  //   setAuth(key)
  //   }
  // }, []);


  return (

    <nav>
      {/* <!-- Navbar --> */}
      <LogoutModal   token={state.token} signOut={signOut} />
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <button className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" 
           onClick={()=>{closeNavBar("navDemo")}} title="Toggle Navigation Menu"><i className="fa fa-bars"></i></button>
          
          <Link to="/dashboard" className="w3-bar-item w3-button w3-padding-large">HOME</Link>
          {auth ? null :
          <>
          <Link to="/credits" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CREDITS</Link>
          <Link to="/about" className="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</Link>
          </>
          }

          {!auth ? null : 
          <><Link to="/profile" className="w3-bar-item w3-button w3-padding-large w3-hide-small">PROFILE</Link> 
          <Link to="/review" className="w3-bar-item w3-button w3-padding-large w3-hide-small">REVIEW</Link> 
          </>
          }

        {!auth ? null : 

          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>     
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <Link to="/credits" className="w3-bar-item w3-button">Credits</Link>
            <Link to="/about" className="w3-bar-item w3-button">About</Link>
            <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
            </div>
          </div>
          }
         
          {/* <a href="/" 
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search"></i></a> */}
          {!auth ? <></> :
          <>
          
          <button onClick={()=>{openModal("logoutModal")}}
          className="w3-hover-red w3-right">
            <i className="fa fa-sign-out"></i></button>
            <div className="w3-right flex" style={{display:'flex'}}>{2}
            </div> 
      <i className="fa fa-heart w3-right"onClick={()=>{alert("liked!!!")}}
        style={{
          color: "red"  ,
          fontSize:"150%"  ,
          cursor:"pointer",
          marginTop:10

   
         }}></i>   
        
          <div className="w3-right flex" onClick={()=>{alert("visited")}}
        style={{
          fontSize:"150%"  ,
          cursor:"pointer",
          marginLeft:0,
          marginTop:10

   
         }}>  
          <FaLocationDot style={{color:"green"}} />    
          {1}
         </div>    




            </>
          } 
        </div>
      </div>
    </nav>

  )
}

export default NavBar