import express, { type Application } from "express";
import cors from "cors"
import authRouts from "./routs/authRouts.js" 
import movieRouts from "./routs/movieRouts.js"
const app:Application= express();

app.use(express.json());
app.use(cors());
//Register routs
app.use("/api",authRouts)
app.use("/api",movieRouts)
app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})