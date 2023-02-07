var express = require('express');
var dao = require("./mongo-dao");
var app = express();

app.use(express.json());



// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);