import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// cors configurtion 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// best practicies for reciving data like json file etc etc 
// form k liye
app.use(express.json({
    limit:"16kb"
}))
// for url 
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
// to keep assets like image etc
app.use(express.static("public"))

// use of cookie parser
app.use(cookieParser())


// routes import 
import userRouter from './routes/user.routes.js';


// routes declareation 
// app.use("/users", userRouter)
// http://localhost:8000/users/register
// we dont use above method we use this instead 
app.use("/api/v1/users", userRouter)
// http:// localhost:8000/api/v1/users/register


export { app };