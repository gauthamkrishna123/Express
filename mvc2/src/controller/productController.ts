

import type{ Product } from "../type/productType.js";
import {products} from "../models/productModel.js"
import express,{type Request,type Response} from "express"

export const getProducts=(req:Request,res:Response)=>{
    res.status(200).json({
        message:"all products",
        products
    })
}

export const addProduct = (req:Request,res:Response) =>{

    const{name,price,category} = req.body;
    const pprice = price>=0
    if(!pprice){
        return res.status(200).json({
            message:"price must be positive"
        })
    }
    const newProduct:Product ={
        id:products.length+1,
        name,
        price,
        category
    }   
    ;

    products.push(newProduct)

    res.status(200).json({
        newProduct
    })
}

export const updateProduct = (req:Request,res:Response)=>{
    const id = Number(req.params.id);
    const upprdt=products.find(p =>p.id === id)
    
    if(!upprdt){
        return res.status(400).json({
            message:"product not found"
        })
    }
    upprdt.name=req.body.name;
    upprdt.price=req.body.price;
    upprdt.category=req.body.category;

    res.status(200).json({
        upprdt
    })
}

export const pricegt = (req:Request,res:Response)=>{
    const prdt = products.filter(p =>p.price >= 1000);
    res.status(200).json({
        message:"price greaterthan 1000",
        prdt
    })
}

export const highestsort = (req:Request,res:Response)=>{
    const sort = products.sort((a,b) =>b.price-a.price)
    res.status(200).json({
        sort
    })
}

export const totalp =(req:Request,res:Response)=>{
    const totalno = products.length
    res.status(200).json({
        message:"total products",
        totalno
    })
} 

//by name
export const byName = (req:Request,res:Response)=>{
    const name = req.query.name as string

    if(!name){
     return   res.status(200).json({
            message:"products not found",

    })
    }
    const findp = products.find(p =>p.name.toLowerCase() === name.toLowerCase())
    console.log(findp);
    
    res.status(200).json(findp)
}

//expensive

export const expensive =(req:Request,res:Response)=>{
    const sort = products.sort((a,b)=> b.price - a.price)
    res.status(200).json({
        message:"most expensive product",
        product:sort[0]})
}