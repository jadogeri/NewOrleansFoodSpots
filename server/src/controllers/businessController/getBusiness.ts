const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as businessService from "../../services/businessService"
import { IBusiness } from "../../interfaces/IBusiness";
import * as userService from  "../../services/userService";

/**
*@desc Get a Business
*@route GET /api/businesss/
*@access private
*/

export const getBusiness = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  const businessId =  req.params.id;
    if(!businessId){
    res.status(400);
    throw new Error("business id is mandatory");
  }
  const user_id = req.user.id


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

    res.status(200).json(foundBusiness);

});




