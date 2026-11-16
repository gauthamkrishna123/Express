import express ,{ type Application, type NextFunction, type Request, type Response } from 'express'

const app:Application = express()

app.use((req:Request, res:Response, next:NextFunction) =>{
    console.log("Application middleware");
    next();
})

app.get("/",(req,res) =>{
    res.send("HOME Page")
})

app.get("/about",(req,res) =>{
    res.send("About Page")
})

const port:number = 3000

app.listen(port,()=>{
    console.log(`running  port:${port}`);
    
})