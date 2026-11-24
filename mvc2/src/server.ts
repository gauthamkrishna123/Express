import express,{ type Application } from "express"
import productRouter from "./router/productRouter.js"

const app:Application = express();

app.use(express.json());

app.use("/api",productRouter);

app.listen(2000,()=>{
    console.log("server running on port 2000");
    
})