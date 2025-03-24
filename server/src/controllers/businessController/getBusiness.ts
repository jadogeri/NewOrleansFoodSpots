const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as businessService from "../../services/businessService"
import { IBusiness } from "../../interfaces/IBusiness";

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

    //get all businesses in an array
    const businesses : IBusiness[] = await businessService.getAll(req);
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




