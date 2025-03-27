/**
 * @author  Joseph Adogeri
 * @since  26-MAR-2025
 * @description Defines protected route for authentication flow
 * @version 1.0.0
 * @access puplic
 */
 
import { Navigate,  Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  try{    
     let auth = localStorage.getItem(process.env.REACT_APP_AUTH_KEY);

    return(
      auth === null  ? <Navigate to= '/login'/> : <Outlet />      
    )
      
  }catch(e){
    console.log(e);
  }
};

export default PrivateRoutes
