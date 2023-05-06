const express = require("express");

const app = express(); 

app.get('/', function(req, res){
    res.send("Hello from server");
});

app.listen(3200, function(){
    console.log("Server  is running on localhost: 3200");
})