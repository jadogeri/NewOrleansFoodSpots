import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Define the base configuration
const config: AxiosRequestConfig = {
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_token',
  },
};

// Create the Axios instance with the configuration
export const api: AxiosInstance = axios.create(config);

// Example of using the instance
api.get('/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

