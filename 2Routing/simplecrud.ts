import  express, {type Application} from "express";

const app:Application=express();

app.use(express.json());

let students:any=[
    {
        id:1,
        name:"rex",
        age:12
    },
    {
        id:2,
        name:"hex",
        age:34
    }
]

app.get("/students",(req,res)=>{
    res.status(200).json({message:"students fetched successfully",students})
})

//GET -fetch all students



//POST

app.post("/students",(req,res)=>{
    const newStudent ={
        id: students.length+1,
        name:req.body.name,
        age:req.body.age
    };
    students.push(newStudent)
    res.status(200).json({message:"student added successfully",students})
})

//PUT

app.put("/students",(req,res)=>{
    students[0] ={
        id:1,
        name:req.body.name,
        age:req.body.age
    }
    res.status(200).json({message:"student updatesd",students})
})

app.delete("/students",(req,res)=>{
    students.splice(0,1);

    res.status(200).json({message:"student deleted",students})
})



app.patch("/students",(req,res)=>{
    if(req.body.name){
        students[0].name = req.body.name;
    }
        if(req.body.age){
        students[0].age = req.body.age;
    }
    res.status(200).json({message:"student updatesd partially",students})
})

app.use((req,res)=>{
    res.status(404).json({message:"rout notfound"})
})
const port:number=2000

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
})