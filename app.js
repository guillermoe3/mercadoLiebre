const express = require("express");
const app = express();
const path = require("path");


/*
app.listen(3002, function(){
    return console.log("El servidor se encuentra levantado")
})*/

app.listen(process.env.PORT || 3000, function(){
    return console.log("El servidor se encuentra corriendo en el puerto 3000")
})

//public access
app.use(express.static("public"));

//website routes

app.use(require("./src/routes/web"))
