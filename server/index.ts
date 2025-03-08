
const dotenv = require("dotenv")
dotenv.config();

import express,{ Request, Response } from 'express';
import MongoDatabase from './src/entities/MongoDatabase';
import bodyParser from 'body-parser';
const errorHandler = require("./src/middlewares/errorHandler");
import {corsOptions} from "./src/configs/cors"
import cors from "cors";
import yelpApi from './src/configs/yelpApi';

type SearchTerm = { 
  searchTerm : string
};



const app = express();

const port = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())
app.use(errorHandler);

//app.use("/api/contacts", require("./src/routes/contactRoutes"))

app.use("/api/users", require("./src/routes/userRoutes"));


app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});

app.get('/fetchdata', async (req: Request, res : Response) => {
  try{
  console.log("calling fetch.........................")
  const {searchTerm } : SearchTerm = req.body

  console.log("yelp api ===",yelpApi)
  const response =  await yelpApi.get(`/search?location=New+Orleans, La&term=${searchTerm}`);
  console.log(JSON.stringify(response.data))
  res.status(200).send(response.data)  
  }catch(e){
    console.log(JSON.stringify(e))
    res.status(400).send(e)  

  }

});

MongoDatabase.getInstance()



if (process.env.NODE_ENV !== 'test') {
  app.listen(port, ()=> {
    console.log(`Backend is running on http://localhost:${port}`)
  })
}



