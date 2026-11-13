import express,{ type Application , type Request, type Response} from 'express'

const app:Application = express();

//npm install express

app.post("/student",(req:Request,res:Response) =>{
    res.send("welcome home page")
});

const port : number =3000 ;//http://localhost:3000/student

app.listen(port,()=>{
    console.log("server listening on port",port);
    
})