const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")

const app = express()

//to connect frontend with backend

app.use(cors())

//to convert data comming from frontend into json format as we are using mongodb which is schemaless so json is required
app.use(express.json())

//database connection (database string taken from mongoose compass)
mongoose.connect("mongodb://127.0.0.1:27017/crud")
// 127.0.0.1 is local host
// crud is database name

//always make api after app.use(express.json())

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;

    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name: req.body.name,email:req.body.email,age:req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(user => res.json(user))
})



// to run our server
app.listen(3001,()=>{
    console.log("server is running")
})