const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as businessService from"../../services/businessService"
import { IJwtPayload } from '../../interfaces/IJWTPayload';
import { IBusiness } from '../../interfaces/IBusiness';


/**
*@desc Get All Businesses
*@route GET /api/businesses/
*@access private
*/

export const getBusinesses = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const businesses : IBusiness[] = await businessService.getAll(req);
    console.log(JSON.stringify(businesses,null,3))    
    res.status(200).json(businesses);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});