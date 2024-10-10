import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx"
import NoPage from '../pages/NoPage/NoPage.jsx';
import DashBoard from '../pages/DashBoard/DashBoard.jsx'
import Home from '../pages/Home/Home.jsx'
import TestPage from "../pages/TestPage/TestPage.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Registration from "../pages/Login/Registration.jsx";



const ProjectRoutes = () => {

  return (
	<BrowserRouter >	
		<Routes >	
					
			<Route path="/" element={<Home />} index /> 
			<Route path="/resetpassword" element={ <ResetPassword />} /> 
			<Route path="/forgotpassword" element={<ForgotPassword />} /> 
			{/* <Route path="/login" element={<Login />} />  */}
			<Route path="/login" element={<Registration />} /> 
			<Route path="/register" element={<Register />} /> 
      		<Route path="*" element={<NoPage />} /> 
			
			<Route path="/test" element={<TestPage />} /> 				

    		<Route element={<PrivateRoutes />}>

                <Route path="/dashboard" element={<DashBoard />} />				

    		</Route>

			<Route path="*" element={<NoPage />} />

  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes