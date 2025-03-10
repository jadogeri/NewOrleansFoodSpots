import axios from "axios";

const baseURL = "http://localhost:5000";
console.log("baseURL === " , baseURL)
;const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  
    //"Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`     
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers})
console.log(api);

export default api
