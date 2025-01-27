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
*@desc Register a user
*@route POST /api/users/register
*@access public
*/

export const registerUser = asyncHandler(async (req: Request, res : Response) => {
  

    res.status(400).json({ message: "something went wrong" });
  
});