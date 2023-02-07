// This file will contain our HTTP requests.
const express = require('express');
const bodyParser = require('body-parser');
const dao = require("./mongo.dao.js");
const app = express();

app.use(bodyParser.json());

// GET all characters
// inside the dao.call we send over the string to the mongo.dao which hits the switch case and then performs the action.

app.get("/", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.send(200)
    })
})

// GET Character:ID
app.get("/PersonInfo/:id", (req, res) => {
    dao.call('getSpecificPerson', {}, (result) => {
        console.log("result: " + result.status)
        res.send(200)
    })
})
// GET Films:ID
app.get("/Films/:id", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.send(200)
    })
})


// GET Species:ID
// app.get("/", (req, res) => {
//     dao.call('getAllCharacters', {}, (result) => {
//         console.log("result: " + result.status)
//         res.send(200)
//     })
// })

// GET Planets:ID
app.get("/", (req, res) => {
    dao.call('getAllCharacters', {}, (result) => {
        console.log("result: " + result.status)
        res.send(200)
    })
})

