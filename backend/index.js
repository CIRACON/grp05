var express = require('express');
var dao = require("./mongo-dao");
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    let credentials = req.body
    dao.login(credentials.username, credentials.password, (data) => {res.send(data)})
})

// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);