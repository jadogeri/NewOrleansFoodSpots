const dotenv = require("dotenv")
dotenv.config();

import express,{ Request, Response } from 'express';
import MongoDatabase from './src/entities/MongoDatabase';
import bodyParser from 'body-parser';
const errorHandler = require("./src/middlewares/errorHandler");
import {corsOptions} from "./src/configs/cors"
import cors from "cors";
import yelpApi from './src/configs/yelpApi';

const app = express();

const port = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())
app.use(errorHandler);

app.use("/api/businesses", require("./src/routes/businessRoutes"))

app.use("/api/users", require("./src/routes/userRoutes"));

app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});

app.get('/fetchdata', async (req: Request, res : Response) => {
  try{
  console.log("calling fetch.........................")
  const searchTerm    = req.query.searchTerm
  console.log("searchTerm ======", searchTerm)

  //console.log("yelp api ===",yelpApi)
  const response =  await yelpApi.get('/search',{
   params:{
      limit :50,
      term : searchTerm,
      location: 'new orleans'
    }
  });
  //console.log("response data ",JSON.stringify(response.data))
  res.status(200).send(response.data)  
  }catch(e){
    console.log("error ===================== ",JSON.stringify(e))
    res.status(400).send(e)  

  }

});

app.get('/fetchdata/:id', async (req: Request, res : Response) => {
  try{
  console.log("calling fetch by id .........................")
  const id = req.params.id;
  console.log("id .........................", id)



  const response =  await yelpApi.get(`/${id}`,{
   params:{
      limit :50,
      location: 'new orleans'
    }
  });
  console.log("response data ",JSON.stringify(response.data))
  res.status(200).send(response.data)  
  }catch(e){
    console.log("error ===================== ",JSON.stringify(e))
    res.status(400).send(e)  

  }

});

MongoDatabase.getInstance()



if (process.env.NODE_ENV !== 'test') {
  app.listen(port, ()=> {
    console.log(`Backend is running on http://localhost:${port}`)
  })
}



