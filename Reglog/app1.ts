import bcrypt  from 'bcrypt';

import express, { type Application, type Request, type Response } from "express";

const app:Application = express();

app.use(express.json());

type user ={
    id:number;
    name:string;
    email:string;
    password:string;
}

const Users:user[]= [];

app.post("/register",async(req:Request,res:Response) =>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message:"all fields are required"
        })
    }
    const existinguser = Users.find(user => user.email === email);
    if(existinguser){
    return res.status(400).json({
        message:"email already exist"
    })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser:user ={
        id:Users.length+1,
        name,
        email,
        password:hashedPassword
    }

    Users.push(newUser)

    res.status(201).json({
        message:"user added successfully",
        user:{
            id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            password:newUser.password
        }
    })

})
//display users

app.get("/users",(req,res)=>{
const userList = Users.map(user => ({
    id:user.id,
    name:user.name,
    email:user.email,
    password:user.password
}))
    res.status(200).json({
        message:"available userssss",
        userList
    })
})


app.listen(1000,()=>{
    console.log(`running on port:1000`);
    
})