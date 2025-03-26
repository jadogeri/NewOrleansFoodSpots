import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx"
import NoPage from '../pages/NoPage/NoPage.jsx';
import DashBoard from '../pages/DashBoard/DashBoard.jsx'
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
import AppBar from "../layouts/AppBar.jsx";
import Footer from "../layouts/Footer.jsx";
import BusinessDetail from "../pages/BusinessDetail.jsx";
import MapView from "../pages/MapView/MapView.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Spacer from "../components/Spacer.jsx";


const ProjectRoutes = () => {
	let auth = localStorage.getItem("AUTHKEY");
	
	console.log("in projectsss auth ===  ",auth)

  return (

	<>
	
	<BrowserRouter >
	<NavBar />	
	{/* <AppBar/>	 */}
	<Spacer marginTop={30}/>

		<Routes >				
			<Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Home />} index /> 
			<Route path="/resetpassword" element={auth ? <Navigate to="/dashboard" /> : <ResetPassword />} /> 
			<Route path="/forgotpassword" element={auth ? <Navigate to="/dashboard" /> :<ForgotPassword />} /> 
			<Route path="/login" element={auth ? <Navigate to="/dashboard" /> :<Login />} /> 
			<Route path="/register" element={auth ? <Navigate to="/dashboard" /> :<Register />} /> 
			<Route path="/credits" element={<Credits />  } />
			<Route path="/about" element={<About />  } />
			<Route path="/contact" element={<Contact />  } />
			<Route path="/product" element={<ProductDetail />  } />



			<Route path="/test" element={<TestPage />} /> 
			 

    		<Route element={<PrivateRoutes />}>
			
            <Route path="/dashboard" element={<DashBoard />  } />
			<Route path="/dashboard/business" element={<BusinessDetail />  } />
			<Route path="/dashboard/business/mapview" element={<MapView /> } />


			<Route path="/profile" element={<Profile />  } />
			<Route path="/review" element={<Review />  } />



    		</Route>
			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>
	<Footer/>

	</>

  )
}



export default ProjectRoutes

