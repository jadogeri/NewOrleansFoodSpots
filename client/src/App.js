import ProjectRoutes from './routes/ProjectRoutes';
import { useContext, useEffect } from 'react';
import { Context as AuthContext } from './contexts/AuthContext';
import { isTokenExpired } from './utils/isTokenExpired';
import AppLogout from './AppLogOut';


function App() {
  const {signIn, signOut, state} = useContext(AuthContext);


  const addAuthState = (token) =>{
    signIn(token)
  }

  const removeAuthState = () =>{
    signOut()
  }

  // #TODO implement checking to see if token has expired
  //if token as expired remove token and set it to null
  //use token to sign back into app
  useEffect(()=>{
    const serializedState = localStorage.getItem(process.env.REACT_APP_AUTH_KEY);
    if(serializedState){
      const data = JSON.parse(serializedState);
      
      if(data?.token !== null){
        const { token } = data;
        if(isTokenExpired(token)){
          localStorage.removeItem(process.env.REACT_APP_AUTH_KEY);
        }
        addAuthState(data.token)
      }else{
        removeAuthState();  
      }
    }


  },[])

  return (
   
    <ProjectRoutes state={state}/>
    
  );
}

export default App;
