const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const postRoute = require("./routes/posts");
// run the postRoute as middlewre, when the user visiting the below url prefix

// Express 4.0
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))

//Express 3.0

// app.use(express.json({limit:'50mb'}))
// app.use(express.urlencoded({limit: '50mb'}))
app.use("/posts", postRoute);
module.exports = app;
