import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
/**  ROUTES -- AUTHFLOW **/
import PrivateRoutes from "./PrivateRoutes.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx"
import NoPage from '../pages/NoPage/NoPage.jsx';
import DashBoard from '../pages/DashBoard/DashBoard.jsx'
import Home from '../pages/Home/Home.jsx'
import TestPage from "../pages/TestPage/TestPage.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import NavBar from "../layouts/NavBar.jsx";
import AppBar from "../layouts/AppBar.jsx";
import Footer from "../layouts/Footer.jsx";

const ProjectRoutes = () => {

	let auth = null;
	let authState = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_KEY));
	if(authState){
		const { accessToken } = authState;
		auth = accessToken.token
	console.log("auth state===========================", authState)
	}
	console.log("auth ===========================", auth)

  return (

	<>
	
	<BrowserRouter >
	<NavBar />	
	<AppBar/>	
		<Routes >				
			<Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Home />} index /> 
			<Route path="/resetpassword" element={auth ? <Navigate to="/dashboard" /> : <ResetPassword />} /> 
			<Route path="/forgotpassword" element={auth ? <Navigate to="/dashboard" /> :<ForgotPassword />} /> 
			<Route path="/login" element={auth ? <Navigate to="/dashboard" /> :<Login />} /> 
			<Route path="/register" element={auth ? <Navigate to="/dashboard" /> :<Register />} /> 
			<Route path="/test" element={<TestPage />} /> 			 

    		<Route element={<PrivateRoutes />}>			
            	<Route path="/dashboard" element={<DashBoard />  } />
    		</Route>
			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>
	<Footer/>

	</>

  )
}



export default ProjectRoutes

