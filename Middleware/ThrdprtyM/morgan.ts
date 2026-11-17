import express from "express"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"));

//app.use(morgan("short"));

app.get("/",(req,res)=>{
    res.send("home")
})

app.listen(4000)