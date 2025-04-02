
const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import mongoose from "mongoose";
import { IBusinessUpdateRequest } from "../../interfaces/IBusinessUpdateRequest";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import { IBusiness } from '../../interfaces/IBusiness';
import * as userService from  "../../services/userService";
import User from '../../models/userModel';
import { ObjectId } from 'mongodb';


/**
*@desc Update  Business
*@route PUT /api/businesss/:id
*@access private
*/

export const updateBusiness = asyncHandler(async (req: IBusinessUpdateRequest, res : Response) => {

  const {  business_id, liked , visited  } : IBusiness = req.body
  console.log("data to change", business_id,  liked , visited )
  const user_id : mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.user.id)

  if(!mongoose.isValidObjectId(user_id)){
    res.status(400);
    throw new Error("id is not valid mongoose ObjectId");
  }
  //const objectId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(stringId);

  if(!business_id){
    errorBroadcaster(res,400,"business id is mandatory!")    
  }

         //check if user id exist
          const registeredUser = await userService.getByID(user_id)
          if(!registeredUser){
            res.status(400);
            throw new Error("Invalid User !");
      
          }
        //get all businesses in an array
        const businesses : IBusiness[] = registeredUser.businesses as IBusiness[]
  console.log("list of all businesses ===")
  console.log(JSON.stringify(businesses));

  let updateBusiness: IBusiness | undefined;
  let index: number | undefined;
  // iterate and find business using business id

  for(let i = 0 ; i < businesses.length ; i++){
    if(businesses[i].business_id === business_id){
      updateBusiness = businesses[i]
      index = i
      break;
    }
  }
  if(!updateBusiness){
    res.status(400);
    throw new Error( `did not find user ${user_id} with a business with id ${business_id}`)
  }

  const modifiedBusiness : IBusiness = {
    business_id : business_id,
    detail: updateBusiness.detail

  }
  if(liked !== null || liked !== undefined){
    modifiedBusiness.liked = liked;
  }
  if(visited !== null || visited !== undefined){
    modifiedBusiness.visited = visited;
  }

  businesses[index as number] = { ...businesses[index as number], ...modifiedBusiness}

  console.log("before modified business to update found =========, ",JSON.stringify(modifiedBusiness));
  const result = await User.updateOne(
    { _id: new ObjectId(user_id) },
    { $set: { businesses: businesses } },
    
  );
  console.log("result******************************8", result);

           //await businessService.update(modifiedBusiness)           
           //const updatedBusiness = await businessService.getByBusinessObject(modifiedBusiness);
          res.status(200).json(result);
 
});