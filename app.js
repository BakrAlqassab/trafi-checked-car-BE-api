const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const postRoute = require("./routes/posts");
// run the postRoute as middlewre, when the user visiting the below url prefix
app.use(bodyParser.json());
app.use("/posts", postRoute);
module.exports = app;
