import * as express from "express";
const router = express.Router();
import { createBusiness, getBusinesses, getBusiness,
         deleteBusinesses, updateBusiness, deleteBusiness
    } from "../controllers/businessController/index";
const validateToken = require("../middlewares/validateTokenHandler");

router.post("/",validateToken, createBusiness);

router.get("/",validateToken, getBusinesses);

router.get("/:id",validateToken, getBusiness);

router.put("/",validateToken, updateBusiness);

router.delete("/:id",validateToken, deleteBusiness);

router.delete("/",validateToken, deleteBusinesses);

module.exports = router;