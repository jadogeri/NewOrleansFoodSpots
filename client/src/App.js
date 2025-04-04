import ProjectRoutes from './routes/ProjectRoutes';
import { useContext, useEffect } from 'react';
import { Context as AuthContext } from './contexts/AuthContext';
import { isTokenExpired } from './utils/isTokenExpired';
import AppLogout from './AppLogOut';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

const api = axios.create({
  baseURL: process.env.REACT_APP_NOFS_SERVER_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // handle 401 error here
    }
    return Promise.reject(error);
  },
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await api.get(queryKey[0]);
        return response.data;
      },
    },
  },
});


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
    <QueryClientProvider client={queryClient}>

    <ProjectRoutes state={state}/>
    </QueryClientProvider>

  );
}

export default App;

