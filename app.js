const express = require('express');
const app = express();

const postRoute = require('./routes/posts')
// run the postRoute as middlewre, when the user visiting the below url prefix
app.use("/posts",postRoute)
module.exports = app
