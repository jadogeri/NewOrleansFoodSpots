import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx"
import NoPage from '../pages/NoPage/NoPage.jsx';
import DashBoard from '../pages/DashBoard/DashBoard'
import Home from '../pages/Home/Home.jsx'
import TestPage from "../pages/TestPage/TestPage.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";

const ProjectRoutes = () => {
	let auth = localStorage.getItem("AUTHKEY");
	
	console.log("in projectsss auth ===  ",auth)

  return (

	
	<BrowserRouter >
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

  )
}



export default ProjectRoutes

