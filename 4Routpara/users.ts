import express, { type Application } from "express"

const app:Application=express();

app.get("/users",(req,res)=>{
    res.send(` fetching all users `)
})

app.put("/users/:id",(req,res)=>{
    res.send(`user ${req.params.id},updated completly`)
})
app.patch("/users/:id",(req,res)=>{
    res.send(`user ${req.params.id},partially updated`)
})
app.delete("/users/:id",(req,res)=>{
    res.send(`user ${req.params.id},deleted`)
})
app.get("/users/:course/:id",(req,res)=>{
    const{course,id} = req.params;
    res.json({course, id})
})

const port=4000

app.listen(port)