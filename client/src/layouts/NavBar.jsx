import React, {useEffect, useState, useContext} from 'react'
import { closeNavBar } from '../utils/html/closeNavBar'
import { Link } from 'react-router-dom'
import { openModal } from '../utils/html/openModal'
import LogoutModal from '../components/modals/LogoutModal/LogoutModal'
import { FaLocationDot } from "react-icons/fa6";
import { useGetAllBusinessesQuery } from '../redux/api/business/business';
import { useSelector } from 'react-redux'
import { selectSessionState } from '../redux/feature/session/sessionSlice'
import { clearUser } from '../redux/feature/user/userSlice'



const getLikedCount = (businesses)=>{
  let count = 0
  for(let i = 0; i < businesses?.length ;i++) {
    if(businesses[i].liked){
      count = count + 1;
      
    }
  }
  return count;

}

const getVisitedCount = (businesses)=>{
  let count = 0
  for(let i = 0; i < businesses?.length ;i++) {
    if(businesses[i].visited){
      count = count + 1;      
    }
  }
  return count;

}
const NavBar = ({
}) => {
  const [auth, setAuth] = useState(null);
 // const {state, signOut} = useContext(AuthContext)
  //const { token : auth} = state
  //console.log("state==== ",state)
  const { data: businesses, refetch, isLoading, error, isFetching } = useGetAllBusinessesQuery();
  const [ likedCount, setLikedCount] = useState(0);
  const [ visitedCount, setVisitdCount] = useState(0)
  const state = useSelector(selectSessionState);

//console.log("businesses in navbar",JSON.stringify(businesses))
  useEffect(() => {
    setAuth(state.token)
    for(let i = 0; i < businesses?.length ;i++) {
      if(businesses[i].liked){
        setLikedCount(likedCount+1)
      }
      if(businesses[i].visited){
        setVisitdCount(visitedCount + 1)
      }
    }
    refetch()
    
  }, []);


  return (

    <nav>
      {/* <!-- Navbar --> */}
      <LogoutModal   token={state.token} signOut={clearUser} />
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
          <Link to="/history" className="w3-bar-item w3-button w3-padding-large w3-hide-small">HISTORY</Link> 

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
            <div className="w3-right flex" style={{display:'flex'}}>{getLikedCount(businesses)}
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
         <h1>{businesses?.length}</h1>
          <FaLocationDot style={{color:"green"}} />    
          {getVisitedCount(businesses)}
         </div>    




            </>
          } 
        </div>
      </div>
    </nav>

  )
}

export default NavBar