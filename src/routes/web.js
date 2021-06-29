const express = require("express");
const app = express.Router();
const path = require("path")


app.get("/", function (req, res){
    res.send("Esto es / ");
})

app.get("/home", function(req, res){
    
    return res.sendFile(path.join(__dirname, "../views/home.html"))
})

module.exports = app;