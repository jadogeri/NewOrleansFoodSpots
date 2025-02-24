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
import Credits from "../pages/Credits/Credits.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Review from "../pages/Review/Review.jsx";
import NavBar from "../layouts/NavBar.jsx";
import Footer from "../layouts/Footer.jsx";
import { Context as AuthContext } from "../contexts/AuthContext.js";


const ProjectRoutes = () => {
	let auth = localStorage.getItem("AUTHKEY");
	
	console.log("in projectsss auth ===  ",auth)

  return (

	
	<BrowserRouter >
		<NavBar />		
		<Routes >				
			<Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Home />} index /> 
			<Route path="/resetpassword" element={auth ? <Navigate to="/dashboard" /> : <ResetPassword />} /> 
			<Route path="/forgotpassword" element={auth ? <Navigate to="/dashboard" /> :<ForgotPassword />} /> 
			<Route path="/login" element={auth ? <Navigate to="/dashboard" /> :<Login />} /> 
			<Route path="/register" element={auth ? <Navigate to="/dashboard" /> :<Register />} /> 
			<Route path="/test" element={<TestPage />} /> 

    		<Route element={<PrivateRoutes />}>
			
            <Route path="/dashboard" element={<DashBoard />  } />
			<Route path="/credits" element={<Credits />  } />
			<Route path="/about" element={<About />  } />
			<Route path="/contact" element={<Contact />  } />
			<Route path="/profile" element={<Review />  } />





    		</Route>
			<Route path="*" element={<NoPage />} />
		</Routes>
		<Footer/>
	</BrowserRouter>

  )
}



export default ProjectRoutes

