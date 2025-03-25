const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import { IJwtPayload } from '../../interfaces/IJWTPayload';
import * as userService from  "../../services/userService";
import { IBusiness } from '../../interfaces/IBusiness';


/**
*@desc Get All Businesses
*@route GET /api/businesses/
*@access private
*/

export const getBusinesses = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
      const user_id = req.user.id
    
    
         //check if user id exist
          const registeredUser = await userService.getByID(user_id)
          if(!registeredUser){
            res.status(400);
            throw new Error("Invalid User !");
      
          }
        //get all businesses in an array
        const businesses : IBusiness[] = registeredUser.businesses as IBusiness[]
    console.log(JSON.stringify(businesses,null,3))    
    res.status(200).json(businesses);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});