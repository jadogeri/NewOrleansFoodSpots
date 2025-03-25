const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import { IBusiness } from '../../interfaces/IBusiness';
import * as userService from  "../../services/userService";
import User from '../../models/userModel';
import { ObjectId } from 'mongodb';

/**
*@desc Delete a business
*@route DELETE /api/businesss/:id
*@access private
*/

export const deleteBusiness = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  const businessId =  req.params.id;
  console.log("value of business id =================",businessId)
  const user_id = req.user.id
  if(!businessId){
    res.status(400);
    throw new Error("business id is mandatory");
  }

     //check if user id exist
      const registeredUser = await userService.getByID(user_id)
      if(!registeredUser){
        res.status(400);
        throw new Error("Invalid User !");
  
      }
      //get all businesses in an array by usr id
      const businesses : IBusiness[] = registeredUser.businesses as IBusiness[]

  console.log("list of all businesses ===")
  console.log(JSON.stringify(businesses));
    
  let foundBusiness: IBusiness | undefined;
  // iterate and find business using business id
    
  for(let i = 0 ; i < businesses.length ; i++){
    if(businesses[i].business_id === businessId){
      foundBusiness = businesses[i]
      break;
    }
  }
  if(!foundBusiness){
    res.status(200).json("business does not exist");
  }
  else{

    const result = await User.updateOne(
      { _id: new ObjectId(user_id) },
      { $pull: { businesses: { business_id: businessId } } }
    );
    console.log("result******************************8", result);
    res.status(200).json(`deleted business with id: ${businessId}`);
  }

});
