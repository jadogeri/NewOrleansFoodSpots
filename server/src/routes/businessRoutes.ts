import * as express from "express";
const router = express.Router();
import { createBusiness,
//     getBusinesss, getBusiness, updateBusiness, deleteBusiness, deleteBusinesss 
    } from "../controllers/businessController/index";
const validateToken = require("../middlewares/validateTokenHandler");

router.post("/",validateToken, createBusiness);

// router.get("/",validateToken, getBusinesss);

// router.get("/:id",validateToken, getBusiness);

// router.post("/",validateToken, createBusiness);

// router.put("/:id",validateToken, updateBusiness);

// router.delete("/:id",validateToken, deleteBusiness);

// router.delete("/",validateToken, deleteBusinesss);

module.exports = router;