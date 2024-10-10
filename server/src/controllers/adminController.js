const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const { nanoid } = require("nanoid");

/**
 * @description Post Register 
 * @route POST /api/Admin/register
 * @access public
 */

const registerAdmin = asyncHandler(async (req, res) => {
   
    res.status(200).json({message : `registered admin`});

});


/**
 * @description Login a Admin
 * @route POST /api/user/login
 * @access public
 */

const loginAdmin = asyncHandler(async (req, res) => {
    res.status(200).json({message : `logged in admin`});

  
});

/**
 * @description Logout a Admin
 * @route PUT /api/user/logout
 * @access public
 */


const logoutAdmin = asyncHandler(async (req, res) => {
    res.status(200).json({message : `logged out admin`});


 });

/**
 * @description Removes a Admin
 * @route DELETE /api/user/deactivate
 * @access private
 */


const deactivateAdmin = asyncHandler(async (req, res) => {     
       


     res.status(200).json({message : `deactivated admin`});
      
});

const testAdmin = asyncHandler(async (req, res) => {     
       


    res.status(200).json({message : `test admin`});
     
});



module.exports = {registerAdmin, loginAdmin, logoutAdmin, deactivateAdmin, testAdmin}