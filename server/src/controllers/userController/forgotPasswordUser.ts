const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';

/**
*@desc Forgot a user
*@route POST /api/users/forgot
*@access public
*/

export const forgotUser = asyncHandler(async (req: Request, res : Response) => {

 
        res.json({ password: "password" });

});