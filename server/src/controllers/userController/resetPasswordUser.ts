/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 18-JAN-2025
 *
 */

const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';


/**
*@desc Reset a user
*@route PUT /api/users/reset
*@access public
*/

export const resetUser = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "logout the user" });
});