import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyTokens.js";
const router = express.Router();
//CREATE
router.post("/:hotelid",verifyAdmin,createRoom)
//UPDATE
router.put("/:id",verifyAdmin,updateRoom)
//Delete
router.delete("/:id",verifyAdmin,deleteRoom)
//GET
router.get("/:id",getRoom)
//GET All
router.get("/",getRooms)

export default router