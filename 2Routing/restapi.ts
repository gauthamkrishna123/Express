import express, {type Application, type Response, type Request} from "express"

const app:Application= express();

app.get("/products",(req:Request,res:Response)=>{
    res.send("view products")
})

app.post("/products",(req:Request,res:Response)=>{
    res.send(" products added")
})

app.put("/products",(req:Request,res:Response)=>{
    res.send(" products updated")
})

app.delete("/products",(req:Request,res:Response)=>{
    res.send(" products deleted")
})

const port:number =6000

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
    
})