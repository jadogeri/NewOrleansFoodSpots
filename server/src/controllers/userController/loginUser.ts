/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 18-JAN-2025
 *
 */

const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';


/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/


export const loginUser = asyncHandler(async (req : Request, res: Response)  => {

    res.status(400).json({ message: "email or password is not valid" });

});
  