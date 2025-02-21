import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../../client/src/routes/PrivateRoutes.jsx";
import React from 'react'
import DashBoard from '../../../client/src/pages/DashBoard.jsx'
import Home from '../../../client/src/pages/Home.jsx'
import TestPage from "../../../client/src/pages/TestPage.jsx";
import ForgotPassword from "../../../client/src/pages/ForgotPassword.jsx";
import ResetPassword from "../../../client/src/pages/ResetPassword.jsx";
import Login from "../../../client/src/pages/Login.jsx";
import Register from "../../../client/src/pages/Register.jsx";
import NoPage from "../../../client/src/pages/NoPage.jsx";


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
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashBoard />} />		
		 	</Route>
  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes
