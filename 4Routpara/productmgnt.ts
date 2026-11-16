
import express, { type Application } from "express"

const app:Application = express();

app.use(express.json())

type Product={
    id:number,
    name:string,
    price:number,
    quantity:number
}

let products:Product[] =[
    {
        id:1,
        name:"laptop",
        price:55000,
        quantity:23
    },
        {
        id:2,
        name:"phone",
        price:566000,
        quantity:2
    },
]

app.get("/products",(req,res)=>{
    res.status(200).json({
        message:"product fetched successfully",
        products
    })
})

app.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id);

    const product = products.find(p=>p.id === id)

    if(!product){
        return res.status(404).json({
            message:"product not found"
        })
    }
    res.status(200).json({
        message:"product fetched successfully",
        product
    })
})

app.post("/products",(req,res)=>{
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity
    };
    products.push(newProduct)

    res.status(200).json({
        message:'product added',
        product:newProduct
    })
})

app.put("/products/:id",(req,res)=>{

    const id = Number(req.params.id)

    const index = products.findIndex(p =>p.id == id)

    if(index === -1){
        return res.status(404).json({
            message:"product not found"
        })
    }

    products[index] = {
        id:id,
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity
    }

    res.status(200).json({
        message:"product updated successfully",
        product:products[index]
    })
})

app.patch("/products/:id",(req,res)=>{

    const id = Number(req.params.id);

    const product = products.find(p=>p.id === id)

    if(!product){
       return res.status(404).send("product not found")
    }

    if(req.body.name){
        product.name = req.body.name
    }
    if(req.body.price){
        product.price = req.body.pice
    }
    if(req.body.quantity){
        product.quantity = req.body.quantity
    }

    res.status(200).json({
        message:"updated successfully",
        product:product
    })
})

app.delete("/products/:id",(req,res)=>{
    const id = Number(req.params.id)

    const index = products.findIndex(p =>p.id === id )

    if (index == -1){
       return res.status(404).send("page not found")
    }
    products.splice(index, 1);

    res.status(200).json({
        message:"product deleted",
        products
    })

})
const port:number=5000

app.listen(port)