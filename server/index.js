var express = require('express');
var dao = require("./mongo-dao");
const cors = require('cors');
var app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/getAll/:type", (req, res) => dao.getAll(req.params.type, (data) => {res.send(data);}))

app.get("/getById/:type/:id", (req, res) => {
    dao.getById(req.params.type, req.params.id, (data) => {res.send(data);})
})

// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);