// require('dotenv').config({path: './env'}) -- this is inconsistency  instead use below
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

import {app} from "./app.js"

dotenv.config({
    path: './.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("mongodb connection failed", err);
})









// first approach -- in which we wrote the connection code in index.js

/*
import express from "express"

const app = express();


(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERRR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ", error);
        throw err 
    }
})()

*/

// the second method is to write the whole database connection code in another file like db/index.js and export connectdb to main index.js this is the standard followed by the industry to which helps in writing clean and readable and structural code 