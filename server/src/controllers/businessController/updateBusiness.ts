
const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as businessService from "../../services/businessService"
import mongoose from "mongoose";
import { IBusinessUpdateRequest } from "../../interfaces/IBusinessUpdateRequest";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import { IBusiness } from '../../interfaces/IBusiness';

/**
*@desc Update  Business
*@route PUT /api/businesss/:id
*@access private
*/

export const updateBusiness = asyncHandler(async (req: IBusinessUpdateRequest, res : Response) => {

  const {  business_id,  detail ,liked , visited  } : IBusiness = req.body
  console.log("data to change", business_id,  detail ,liked , visited )
  const user_id : mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.user.id)

  if(!mongoose.isValidObjectId(user_id)){
    res.status(400);
    throw new Error("id is not valid mongoose ObjectId");
  }
  //const objectId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(stringId);

  if(!business_id){
    errorBroadcaster(res,400,"business id is mandatory!")    
  }

  const businesses : IBusiness[] = await businessService.getAll(req);
  console.log("list of all businesses ===")
  console.log(JSON.stringify(businesses));

  let updateBusiness: IBusiness | undefined;
  // iterate and find business using business id

  for(let i = 0 ; i < businesses.length ; i++){
    if(businesses[i].business_id === business_id){
      updateBusiness = businesses[i]
      break;
    }
  }
  if(!updateBusiness){
    res.status(400);
    throw new Error( `did not find user ${user_id} with a business with id ${business_id}`)
  }
  console.log("before business to update found =========, ",JSON.stringify(updateBusiness));

  const modifiedBusiness : IBusiness ={
    business_id : business_id,
    user_id : user_id

  }
  if(liked !== null || liked !== undefined){
    modifiedBusiness.liked = liked;
  }
  if(visited !== null || visited !== undefined){
    modifiedBusiness.visited = visited;
  }
  if(detail !== null || detail !== undefined){
    modifiedBusiness.detail = detail
  }

  console.log("before modified business to update found =========, ",JSON.stringify(modifiedBusiness));

           await businessService.update(modifiedBusiness)           
           const updatedBusiness = await businessService.getByBusinessObject(modifiedBusiness);
          res.status(200).json(updatedBusiness);

    // .then(async (business)=>{
    //     if(!business){
    //       res.status(400).json("business does not exist");
    //     }   

    //     if(business?.user_id?.toString()  != user_id.toString()){
    //       res.status(400);
    //       throw new Error(`user id: ${user_id} not authorized to update business `);
    //     }
    //     else{
    //       console.log("strings are the same")     
          
    //       const newBusiness : IBusiness ={
    //         business_id : business_id,
    //         detail : detail ,
    //         liked : liked, 
    //         visited : visited

    //       }
 
    //        await businessService.update(objectId,newBusiness)
    //        const updatedBusiness = await businessService.getById(objectId);
    //       res.status(200).json(updatedBusiness);

          
    //     }
    
    //   })
    
 
});