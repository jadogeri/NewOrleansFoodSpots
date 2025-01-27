const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';

/**
*@desc Deactivate a user
*@route POST /api/users/deactivate
*@access public
*/

export const deactivateUser = asyncHandler(async (req: Request, res : Response) => {

  
  res.json({ message: "success" });
});