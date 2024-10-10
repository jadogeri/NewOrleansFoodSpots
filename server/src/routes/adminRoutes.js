const express = require('express')
const {validateTokenBody} = require("../middlewares/validateBodyTokenHandler")

const router = express.Router();

const {registerAdmin, loginAdmin, logoutAdmin, deactivateAdmin, testAdmin} = require("../controllers/adminController");

router.post("/register",registerAdmin);

router.post("/login",loginAdmin);

router.post("/logout",validateTokenBody,logoutAdmin);

router.delete("/deactivate",deactivateAdmin);

router.get("/test",testAdmin);





module.exports = router;