const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as businessService from"../../services/businessService"
import { IJwtPayload } from '../../interfaces/IJWTPayload';
import { IBusiness } from '../../interfaces/IBusiness';
import * as userService from  "../../services/userService";
import User from '../../models/userModel';
import { ObjectId } from 'mongodb';


/**
*@desc Delete All Businesses
*@route DELETE /api/businesss/
*@access private
*/

export const deleteBusinesses = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const user_id = req.user.id;

      //check if user id exist
        const registeredUser = await userService.getByID(user_id)
        if(!registeredUser){
          res.status(400);
          throw new Error("Invalid User !");
    
        }
        console.log("list of all businesses ===")
        console.log(JSON.stringify(registeredUser.businesses, null, 2))

        const result = await User.updateOne(
          { _id: new ObjectId(user_id) },
          { $pull: { businesses: {} } }
        );   
   
      res.status(200).json({ message: `deleted all businesss of user id : ${req.user.id}` });

  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});



