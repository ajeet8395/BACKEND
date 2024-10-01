const express = require('express');
const app = express();

const userModel = require('./usermodal');

app.get('/', (req, res) => {
    res.send("hey");
});

//! CRUD Operation

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Ajeet",
        email: "ajeetsi8395@gmail.com",
        username: "ajeet"
    })
    
    res.send(createduser);
});

app.get('/update', async (req, res) => {
    let updateUser = await userModel.findOneAndUpdate({username: "ajeet"}, {name: "ajeet singh rana"}, {new:true}) // userModel.findOneAndUpdate(fineone, update, {new:true})
    
    res.send(updateUser);
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();    
    res.send(users);
});

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "ajeet"});    
    res.send(users);
});

app.listen(3000);