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

  if(req){
  const { business_id, detail,liked,visited} : IBusiness = req.body;
  const user_id = req.user.id

  console.log("business data === ",user_id,business_id, detail,liked,visited)

 if (!user_id || !business_id || !detail) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  else{

    //check if user id exist
    const registeredUser = await userService.getByID(user_id)
    if(!registeredUser){
      res.status(400);
      throw new Error("Invalid User !");

    }
    //get all businesses in an array by usr id
    const businesses : IBusiness[] = await businessService.getAll(req);
      console.log("list of all businesses ===")
      console.log(JSON.stringify(businesses));
    
      let foundBusiness: IBusiness | undefined;
      // iterate and find business using business id
    
      for(let i = 0 ; i < businesses.length ; i++){
        if(businesses[i].business_id === business_id){
          foundBusiness = businesses[i]
          break;
        }
      }
      if(foundBusiness){
        res.status(400);
        throw new Error(`businees ${business_id} already exists   for user ${user_id} `);

      }else{
        
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
}else{
    res.status(400).json({ message: "Invalid User" });
    }

});