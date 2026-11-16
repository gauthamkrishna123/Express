import express, {type  Application } from "express";
import userRout from "./product.js"


const app:Application = express()

app.use("/api",userRout )

const port:number=4000

app.listen(port)