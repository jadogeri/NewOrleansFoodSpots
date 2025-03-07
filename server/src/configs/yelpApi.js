import axios from "axios";

const baseURL = process.env.YELP_BASE_URL;
console.log("baseURL === " , baseURL)
;const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  ,
    "Authorization": `Bearer ${process.env.YELP_API_KEY}`     
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers,
    data:{
        location : "new orleans",
        
    }
  
})
console.log(api);

export default api


