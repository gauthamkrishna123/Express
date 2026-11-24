import bcrypt  from 'bcrypt';

import express, { type Application, type Request, type Response } from "express";
import jwt from "jsonwebtoken"
const app:Application = express();
const SECRET_KEY = "secret"
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

//login

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = Users.find(user => user.email === email);
    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(400).json({
            message:"wrong password "
        })
    }
    const token = jwt.sign({id:user.id, email:user.email},SECRET_KEY, {expiresIn:"1d"})
    
    res.status(200).json({
        message:`${user.name} login successfully`,
        token
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