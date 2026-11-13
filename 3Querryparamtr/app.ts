import express, { type Application } from "express"

const app:Application = express();

const products = [
    {id:1,name:"iphone 12", category:"mobile", price:200000},
    {id:2,name:"apple", category:"watch", price:320000},
    {id:3,name:"hp", category:"laptop", price:124000},
    {id:4,name:"ROG", category:"laptop", price:200700},
]

app.get("/products",(req,res) =>{
     const {category , maxPrice ,minPrice} = req.query;

     let result = products

     if(category){
       result= result.filter(p =>p.category === String(category))
     }
          if(minPrice){
       result= result.filter(p =>p.price >= Number(minPrice))
     }
          if(maxPrice){
       result= result.filter(p =>p.price <= Number(maxPrice))
     }
     res.json(result)
})

const port=3000;

app.listen(port)