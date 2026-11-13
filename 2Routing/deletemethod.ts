import express, {type Application, type Response, type Request} from "express"

const app:Application = express();

let students =[
    {id:1,name:"gautham"},
    {id:2,name:"riya"}
];

app.delete("/students",(req:Request,res:Response)=>{
    students = students.filter(student =>student.id !== 2)
    res.json({"message":"student deleted",students})
})
const port:number=2000


app.listen(port, ()=>{
    console.log(`server running on port${port}`);
    
})