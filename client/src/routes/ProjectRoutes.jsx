import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import DashBoard from "../pages/DashBoard.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx"
import NoPage from '../pages/NoPage.jsx';
import Home from '../pages/Home.jsx'
import TestPage from "../pages/TestPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
// import Header from "../layouts/Header.jsx";
// import Footer from "../layouts/Footer.jsx";
// import { Navigation } from "../layouts/Navigation.jsx";


const ProjectRoutes = () => {
  return (

	
	<BrowserRouter >	
	{/* <Header />
	<Footer />
	 */}
	 {/* <Navigation /> */}
		<Routes >	
			
			<Route></Route>
			
			<Route path="/" element={<Home />} index /> 
			<Route path="/resetpassword" element={ <ResetPassword />} /> 
			<Route path="/forgotpassword" element={<ForgotPassword />} /> 
			<Route path="/login" element={<Login />} /> 
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
