var express = require('express');
var dao = require("./mongo-dao");
var app = express();

app.use(express.json());

app.get("/", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.send("null?");
    })
})

// GET Character:ID
app.get("/PersonInfo/:id", (req, res) => {
    dao.call('getSpecificPerson', {}, (result) => {
        console.log("result: " + result.status)
        res.statusCode;
    })
})
// GET Films:ID
app.get("/Films/:id", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.statusCode;
    })
})

// GET Planets:ID
app.get("/", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.statusCode
    })
})

// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);