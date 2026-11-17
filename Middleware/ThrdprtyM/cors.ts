// third party middlewares is a middleware created by other developers or organizations.need to install it
//using npm

//cors

// it allows a frontend and backend running on different origins to communicate

import express from "express"
import cors from "cors"

const app= express()
app.use(cors());
app.get("/",(req,res,)=>{
    res.send("cors enabled")
})

app.listen(5000)