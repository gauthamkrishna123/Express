import express,{ type Application, type NextFunction, type Request, type Response } from "express"
const app:Application = express();

app.get("/divide",(req:Request,res:Response,next:NextFunction)=>{
    try{
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if( b === 0){
        throw new Error("cannot divided by 0")
    }
    res.send(`result = ${a/b}`);
}catch (err){
    next(err);
}
});

app.get("/database",(req,res,next)=>{
    try{
        throw new Error("database connection failed")
    }catch(err){
        next(err)
    }
})

app.get("/login",(req:Request,res:Response,next:NextFunction)=>{
    try{
        throw new Error("invalid username or password")
    }catch(err){
        next(err)
    }
})

app.get("/payment",(req:Request,res:Response,next:NextFunction)=>{
    try{
        throw new Error("payment failed.")
    }catch(err){
        next(err)
    }
})

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log("error:",err.message);
    
    res.status(500).json({
        success:false,
        message:err.message
    })
})

app.listen(5000)