const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as businessService from"../../services/businessService"
import { IJwtPayload } from '../../interfaces/IJWTPayload';

/**
*@desc Delete All Businesses
*@route DELETE /api/businesss/
*@access private
*/

export const deleteBusinesses = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const businesss = await businessService.removeAll(req)
    .then(()=>{
      res.status(200).json({ message: `deleted all businesss of user id : ${req.user.id}` });

    });
    console.log(JSON.stringify(businesss,null,3))    
    res.status(200).json(businesss);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});



