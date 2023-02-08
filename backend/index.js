var express = require('express');
var dao = require("./mongo-dao");
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());



// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);