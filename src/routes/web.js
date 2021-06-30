const express = require("express");
const app = express.Router();
const path = require("path")


app.get("/", function (req, res){
    return res.sendFile(path.join(__dirname, "../views/home.html"))
})

app.get("/home", function(req, res){
    
    return res.sendFile(path.join(__dirname, "../views/home.html"))
})

app.get("/register", function(req, res){
    
    return res.sendFile(path.join(__dirname, "../views/register.html"))
})

app.get("/login", function(req, res){
    
    return res.sendFile(path.join(__dirname, "../views/login.html"))
})


module.exports = app;