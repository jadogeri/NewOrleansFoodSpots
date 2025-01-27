const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';

/**
*@desc Logout a user
*@route POST /api/users/logout
*@access public
*/


export const logoutUser = asyncHandler(async (req: Request, res : Response) => {
   

res.json({ message: "logout the user" });
});