import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import DashBoard from '../pages/DashBoard.jsx'
import Home from '../pages/Home.jsx'
import TestPage from "../pages/TestPage.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NoPage from "../pages/NoPage.jsx";
import SearchScreen from "../screens/Search/SearchScreen.js";

const ProjectRoutes = () => {
	
  return (
	
	<BrowserRouter >		
		<Routes >				
			<Route path="/" element={<Home />} index /> 		
			<Route path="/test" element={<TestPage />} /> 	
			<Route path="/login" element={<Login />} /> 	
			<Route path="/resetpassword" element={<ResetPassword />}/>
			<Route path="/forgotpassword" element={<ForgotPassword />}/>	
			<Route path="/register" element={<Register />} /> 	
			<Route path="*" element={<NoPage />} /> 
			<Route path="/search" element={<SearchScreen />} /> 



			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashBoard />} />		
		 	</Route>
  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes
