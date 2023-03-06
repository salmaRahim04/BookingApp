import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js';
import usersRoute  from './routes/users.js';
import hotelsRoute  from './routes/hotels.js';
import roomsRoute  from './routes/rooms.js';
import cookieParser from "cookie-parser"
import cors from 'cors'
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology:true})
 .then(() =>  {
    app.listen(PORT,()=> console.log( `Server is listening to ${PORT}`)) 
 }).catch((err) => {
     console.log(err.message);
 });
 app.use(cors())
 app.use(cookieParser())
 app.use(express.json());
 app.use("/api/auth",authRoute);
 app.use("/api/users",usersRoute);
 app.use("/api/hotels",hotelsRoute);
 app.use("/api/rooms",roomsRoute)
 app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'something went wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
      });
 })