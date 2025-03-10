import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Define the base configuration
const config: AxiosRequestConfig = {
  baseURL: process.env.YELP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": ["GET"],
     "Authorization": `Bearer ${process.env.YELP_API_KEY}`,
  }
//   ,
//   data:{
//     location:"new orleans"
//   }
};

// Create the Axios instance with the configuration
const api: AxiosInstance = axios.create(config);

// Example of using the instance


//console.log(api);

export default api


