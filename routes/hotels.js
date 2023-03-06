import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyTokens.js";
const router = express.Router();
//CREATE
router.post("/",createHotel)
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
//Delete
router.delete("/:id",verifyAdmin,deleteHotel)
//GET
router.get("/find/:id",getHotel)
//GET All
router.get("/",getHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)

export default router