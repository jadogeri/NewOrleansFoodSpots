const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as businessService from "../../services/businessService"
import { IBusiness } from '../../interfaces/IBusiness';
import * as userService from  "../../services/userService";

/**
*@desc Delete a business
*@route DELETE /api/businesss/:id
*@access private
*/

export const deleteBusiness = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  const businessId =  req.params.id;
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
    registeredUser.businesses?.filter((business)=>{
      return business.business_id !== businessId
    })
    registeredUser.save();
    res.status(200).json(`deleted business with id: ${businessId}`);
  }

});
