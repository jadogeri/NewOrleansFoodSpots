import ProjectRoutes from './routes/ProjectRoutes';
import { useContext, useEffect } from 'react';
import { Context as AuthContext } from './contexts/AuthContext';
import { isTokenExpired } from './utils/isTokenExpired';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from './redux/feature/user/userSlice';




function App() {
//onst authState = useSelector((state) => state.session);
// const dispatch = useDispatch()
// console.log("auth session======================================================================", JSON.stringify(authState), typeof authState)
// const { token } = authState


//   // #TODO implement checking to see if token has expired
//   //if token as expired remove token and set it to null
//   //use token to sign back into app
//   useEffect(()=>{
//     // const serializedState = localStorage.getItem(process.env.REACT_APP_AUTH_KEY);
//     // if(serializedState){
//     //   const data = JSON.parse(serializedState);

//       if(token){
//         if(isTokenExpired(token) === true){
//           dispatch(clearUser())
//         }
//       }


//   },[])

  return (

    <ProjectRoutes />

  );
}

export default App;

