const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
    .connect(
        "mongodb+srv://" +
        process.env.MONGO_ATLAS_USER_NAME + ":" +
        process.env.MONGO_ATLAS_PW +
        "@cluster0.1gafobb.mongodb.net/ecommerce?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Connection failed!");
    });

app.get('/', function (req, res) {
    res.send("Hello from server");
});

module.exports = app;
