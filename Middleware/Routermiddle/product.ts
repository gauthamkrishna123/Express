import express,{ type NextFunction,type Request, type Response } from "express"

const router = express.Router();

function checkUser(req:Request,res:Response,next:NextFunction){
    console.log("checking user");
    next();
}

router.use(checkUser)

router.get("/profile",(req,res)=>{
    res.send("profiile page")
})

router.get("/about",(req,res)=>{
    res.send("about page")
})

export default router