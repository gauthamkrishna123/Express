import express, {type Application, type Response, type Request} from "express"

const app:Application = express();

app.use(express.json());

let student ={
    id:1,
    name:"manu",
    age:44
};

app.put("/student/1",(req:Request,res:Response)=>{

    student = req.body;

    res.json({"message":"student updated",student})
})

const port:number=5000

app.listen(port,()=>{
    console.log(`running on port:${port}`);
    
})