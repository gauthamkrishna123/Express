import express, { type Application } from "express"

const app:Application =express();

const port:number =3000;

//URL: http://localhost:3000/search?product=laptop

app.get("/search",(req,res)=>{
    const keyword = req.query.product;
    res.send(`searching for :${keyword}`)
})

// two get method with same url cannot run.eg:search in here
// app.get("/search",(req,res)=>{
//     const {catagory , brand , price} = req.query;
//     res.json({catagory,brand,price})
// })

app.listen(port,()=>{
    console.log(`running on port${port}`);
    
})