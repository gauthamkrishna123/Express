import express, {type Application, type Response, type Request} from "express"

const app:Application = express();

app.use(express.json());
const students:any[] =[
    "arul",
    'abi',
    'suku',
    'manu'
]
app.get("/student",(req:Request,res:Response)=>{
    res.status(200).json({"message":'get student',students})
})

const port:number =4000

app.listen(port, ()=>{
    console.log(`server running on port :${port}`);
    
})