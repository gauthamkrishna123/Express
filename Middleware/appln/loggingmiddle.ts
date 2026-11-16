import express ,{ type Application, type NextFunction, type Request, type Response } from 'express'

const app:Application = express()

app.use((req:Request, res:Response, next:NextFunction) =>{
    console.log("Application middleware 1 executed");
    next();
})
app.use((req:Request, res:Response, next:NextFunction) =>{
    console.log(`application midddleware 2: ${req.url}/${req.method}`);
    next();
})

app.use((req:Request, res:Response, next:NextFunction) =>{
    console.log("Application middleware3: authentication check demo ");
    next();
})

app.get("/home",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})

const port:number=7000

app.listen(port,()=>{
    console.log("run on port",port);
    
})