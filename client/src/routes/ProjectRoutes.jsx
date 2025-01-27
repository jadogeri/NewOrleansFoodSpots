import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
import DashBoard from '../pages/DashBoard/DashBoard.jsx'
import Home from '../pages/Home/Home.jsx'
import TestPage from "../pages/TestPage/TestPage.jsx";


const ProjectRoutes = () => {
	
  return (
	
	<BrowserRouter >	
	
		<Routes >	
			
			<Route></Route>
			<Route path="/" element={<Home />} index /> 
		
			<Route path="/test" element={<TestPage />} /> 	
			

    		<Route element={<PrivateRoutes />}>
			<Route path="/dashboard" element={<DashBoard />} />				



    		</Route>

  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes

/*
<TransitionGroup>
<CSSTransition
key={location.key}
timeout={450}
classNames="fade"		
>

*/
