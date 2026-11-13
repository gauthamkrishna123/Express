import express, {type Application, type Response, type Request} from "express"

const app:Application = express();

app.use(express.json());

let student ={
    id:1,
    name:"manu",
    age:44
};

app.patch("/stud",(req:Request,res:Response)=>{
    if (req.body.name){
        student.name = req.body.name
    }
     if (req.body.age){
        student.age = req.body.age
    }

    res.status(200).json({"message":"student partially updated",student})
})

const port:number= 5000

app.listen(port,()=>{
    console.log(`port${port}`);
    
})