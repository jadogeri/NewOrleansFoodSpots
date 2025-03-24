import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context as AuthContext } from '../contexts/AuthContext'

const AppBar = () => {
    const [auth, setAuth] = useState(null);
    const {state, signIn} = useContext(AuthContext)
    console.log("state==== ",state)
    useEffect(() => {
      // Update localStorage whenever the 'name' state changes
      let key = localStorage.getItem('AUTHKEY');
      if(key){
      console.log("calling use effect in NavBar key ==== ",key)
      signIn(key)
      setAuth(key)
      }
    }, []);
  return (
    <nav>
        {/* <!-- Navbar on small screens (remove the onClick attribute if you want the navbar to always show on top of the content when clicking on the links) --> */}
        <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:"46px"}}>
          <Link to="/credits" className="w3-bar-item w3-button w3-padding-large" >CREDITS</Link>
         <Link to="/about" className="w3-bar-item w3-button w3-padding-large" >ABOUT</Link>
        <Link to="/contact" className="w3-bar-item w3-button w3-padding-large" >CONTACT</Link>
        {!state.token ? null : <Link to="/profile" className="w3-bar-item w3-button w3-padding-large">PROFILE</Link>}
        {!state.token ? null : <Link to="/review" className="w3-bar-item w3-button w3-padding-large" >REVIEW</Link>}

        </div>
    </nav>
  )
}

export default AppBar

