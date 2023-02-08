var express = require('express');
var dao = require("./mongo-dao");
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

app.post("/filterEmployees", (req, res) => {
    const validKeys = ['name', 'phone_number', 'job_role', 'work_location', 'division', 'department']
    let body = req.body

    Object.keys(body).forEach(
        (key) => (validKeys.includes(key) && typeof body[key] === "string") || delete body[key]
    );

    dao.filterEmployees(body, (data) => {res.send(data)})
})

app.post("/login", (req, res) => {
    let credentials = req.body
    dao.login(credentials.username, credentials.password, (data) => {res.sendStatus(data)})
})

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);