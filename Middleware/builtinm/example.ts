import express, {type Application } from "express";

const app:Application = express();

app.use(express.json());

app.post("/homee",(req,res)=>{
    res.send(req.body)
})

const port =4000

app.listen(port)