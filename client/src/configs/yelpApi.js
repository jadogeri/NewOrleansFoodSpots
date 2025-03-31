import axios from "axios";

const baseURL = process.env.REACT_APP_NOFS_SERVER_URL;
console.log("baseURL === " , baseURL)
;const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers})
console.log(api);

export default api
