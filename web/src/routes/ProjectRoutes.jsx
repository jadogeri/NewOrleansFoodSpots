
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  PrivateRoutes  from "./PrivateRoutes.jsx";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import SignIn from "../pages/Login/Login.jsx"
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx"
import NoPage from '../pages/NoPage/NoPage.jsx';
import DashBoard from '../pages/DashBoard/DashBoard.jsx'
import Test from "../pages/TestPage/TestPage.jsx"

import Home from '../pages/Home/Home.jsx'



const ProjectRoutes = () => {

  return (
	<BrowserRouter >	
		<Routes >	
					
			<Route path="/" element={<Home />} index /> 
			<Route path="/resetpassword" element={ <ResetPassword />} /> 
			<Route path="/forgotpassword" element={<ForgotPassword />} /> 
			<Route path="/signin" element={<SignIn />} /> 
            <Route path="/test" element={<Test />} /> 

				

    		<Route element={<PrivateRoutes />}>

                <Route path="/dashboard" element={<DashBoard />} />	
	

    		</Route>

			<Route path="*" element={<NoPage />} />

  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes
