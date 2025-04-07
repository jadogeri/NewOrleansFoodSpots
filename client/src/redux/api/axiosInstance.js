import axios from "axios";

let token = ""
const serializedState =  localStorage.getItem(process.env.REACT_APP_REDUX_STATE);

if(serializedState){
  const state = JSON.parse(serializedState)
  token = state.session.token
}

export const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  ,
    "Authorization":`Bearer ${token}`
}

const baseURL = process.env.REACT_APP_NOFS_SERVER_URL;

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  })

export default api
