const express = require("express");
const app = express();
const path = require("path");



app.listen(3002, function(){
    return console.log("El servidor se encuentra levantado")
})

//public access
app.use(express.static("public"));

//website routes

app.use(require("./src/routes/web"))
