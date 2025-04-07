/**
 * @author  Joseph Adogeri
 * @since  26-MAR-2025
 * @description Defines protected route for authentication flow
 * @version 1.0.0
 * @access puplic
 */
 
import { Navigate,  Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSessionState } from "../redux/feature/session/sessionSlice.js";

const PrivateRoutes = () => {
  try{    
    const state = useSelector(selectSessionState)
    console.log("auth from private routes===========================", state)
    const auth = state.token

    return(
      auth === null  ? <Navigate to= '/login'/> : <Outlet />      
    )
      
  }catch(e){
    console.log(e);
  }
};

export default PrivateRoutes


/**
 * 
 







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
import BusinessDetail from "../pages/BusinessDetail.jsx";
import Credits from "../pages/Credits/Credits.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Review from "../pages/Review/Review.jsx";
import MapView from "../pages/MapView/MapView.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import History from "../pages/History/History.jsx";
import { useSelector } from "react-redux";
import { selectSessionState } from "../redux/feature/session/sessionSlice.js";

const ProjectRoutes = ({
}) => {

	const state = useSelector(selectSessionState)
	console.log("auth ===========================", state)
	const auth = state.token










 */