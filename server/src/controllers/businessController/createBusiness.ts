const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IBusiness } from "../../interfaces/IBusiness";
import * as businessService from"../../services/businessService"
import * as userService from"../../services/userService"
import { IBusinessCreateRequest } from "../../interfaces/IBusinessCreateRequest";
import { errorBroadcaster } from '../../utils/errorBroadcaster';


/**
*@desc Add Auth Token
*@route POST /api/business/create
*@access public
*/

export const createBusiness = asyncHandler(async (req: IBusinessCreateRequest, res : Response)  => {

  const { user_id,business_id, detail,liked,visited} : IBusiness = req.body;
if(req){
  console.log("business data === ",user_id,business_id, detail,liked,visited)

 if (!user_id || !business_id || !detail) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  else{

    //check if user id exist

    //create new business user
    const registeredUser = await userService.getByID(user_id)
    if(!registeredUser){
      res.status(400);
      throw new Error("Invalid User !");

    }
    
    const business : IBusiness = {
      user_id: user_id,
      business_id : business_id,
      detail: {
        name: detail.name,
        phone : detail.phone,
        rating : detail.rating
      },
      liked: liked? liked : false,
      visited: visited? visited :false

    }

    //check database if business already exist
   const registeredBusiness = await businessService.getByBusinessID(business_id)
   if(registeredBusiness){
    res.status(400);
    throw new Error("Business already exist!");
   }else{
    await businessService.create(business)
    .then((newBusiness)=>{
      console.log("new business : ",newBusiness,typeof newBusiness)

      res.status(201).json(newBusiness);
    })   
    .catch((e)=>{
      errorBroadcaster(res,400,`Error:\n ${e}`)

    }) 
   }
  }

}


});