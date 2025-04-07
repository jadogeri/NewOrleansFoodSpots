/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 09-FEB-2025
 *
 */

const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import { IJwtPayload } from '../../interfaces/IJWTPayload';
import * as userService from "../../services/userService"
import { errorBroadcaster } from '../../utils/errorBroadcaster';
import { IProfile } from '../../interfaces/IProfile';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Current user info
*@route POST /api/users/profile
*@access private
*/

export const profileUser = asyncHandler(async (req : IJwtPayload, res: Response) => {

  const registerUser  = await userService.getByID(req.user.id);
  if(registerUser){
    const profile : IProfile ={
      email : registerUser.email,
      username:registerUser.username,
      phone:registerUser.phone,
     
    }
    console.log("registered user========",profile)
    res.status(200).json(profile);
  }else{
  //res.status(200).json(req.user);
      errorBroadcaster(res,404,"not a registered user");
  }
  
});



