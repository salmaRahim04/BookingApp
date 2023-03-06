import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";
const router = express.Router();
//CREATE
/*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
 res.send("Hello user,you are logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello user,you are logged in and you can delete your acc")
})
router.get("/checkuadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello admin,you are logged in and you can delete all acc")
})*/
//UPDATE
router.put("/:id",verifyUser,updateUser)
//Delete
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser,getUser)
//GET All
router.get("/",getUsers)

export default router