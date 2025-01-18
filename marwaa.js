const express =require('express');
const cors=require("cors")
const app = express();


 
app.use(cors());
app.use(express.json());


let users =[];

function randonnumber(){
  return Math.floor(Math.random()*1000000000);
}

app.post("/user",(req,res)=>{
  console.log(req.body)

  let newuser  ={
    id: randonnumber(),
    fullname:req.body.fullname,
    username:req.body.username,
    password:req.body.password
  }
  users.push(newuser);
  res.status(201).send("user is created")
 
})

app.get("/users", (req,res)=>{
   res.send(users)
})  



app.listen(6060,()=>{
    console.log("server running on post 6060")
})