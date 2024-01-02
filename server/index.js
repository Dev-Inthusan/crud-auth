const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://inthujan:inthucr7@final-project.q6h7x42.mongodb.net/?retryWrites=true&w=majority")

app.get('/',(req,res) => {
    const id = req.query.id;
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/',(req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})
app.put('/updateUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findIdAndUpdate({_id: id},{
        name: req.body.name,
        email: req.body.email,
        age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json)
})
app.post("/createUser",(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.listen(3002, () => {
    console.log("Server is Running")
})