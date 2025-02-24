import React, {useEffect, useState, useContext} from 'react'
import { myFunction } from '../pages/DashBoard/d'
import { Link } from 'react-router-dom'
import { Context as AuthContext } from '../contexts/AuthContext'

const NavBar = () => {
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
      {/* <!-- Navbar --> */}
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <button className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" 
           onClick={()=>{myFunction()}} title="Toggle Navigation Menu"><i className="fa fa-bars"></i></button>
          <Link to="/dashboard" className="w3-bar-item w3-button w3-padding-large">HOME</Link>
          <Link to="/credits" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CREDITS</Link>
          <Link to="/about" className="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</Link>
          {!state.token ? null : <Link to="/profile" className="w3-bar-item w3-button w3-padding-large w3-hide-small">PROFILE</Link> }
          {!state.token ? null : <Link to="/review" className="w3-bar-item w3-button w3-padding-large w3-hide-small">REVIEW</Link> }


          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>     
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" className="w3-bar-item w3-button">Merchandise</a>
              <a href="#" className="w3-bar-item w3-button">Extras</a>
              <a href="#" className="w3-bar-item w3-button">Media</a>
            </div>
          </div>
          <a //href="javascript:void(0)" 
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search"></i></a>
        </div>
      </div>
    </nav>

  )
}

export default NavBar