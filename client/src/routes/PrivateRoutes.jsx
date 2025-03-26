/**
 * @author  Joseph Adogeri
 * @since  04-03-2024
 * @description Defines protected route for authentication flow
 * @version 1.0.0
 * @access puplic
 */
 
import { Navigate,  Outlet } from "react-router-dom";
import { isTokenExpired } from "../utils/isTokenExpired";

const PrivateRoutes = () => {

  try{    
     let data = JSON.parse(localStorage.getItem("AUTHKEY"))
     const { accessToken} = data
     let auth = accessToken
     console.log("data========================================================================================",data)
     console.log("auth========================================================================================",auth);
if(isTokenExpired(auth)){
  console.log("token expired=====================================================================================")

localStorage.removeItem("AUTHKEY");
}else{
  console.log("token is good=====================================================================================")

}


  return(
    isTokenExpired(auth)  ? <Navigate to= '/login'/> : <Outlet />      
  )
      
  }catch(e){
    console.log(e);
  }
};

export default PrivateRoutes
