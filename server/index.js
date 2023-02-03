let express = require('express');
let dao = require("./mongo-dao")
let app = express();

app.use(express.json()); // Parse JSON body

app.get("/films", (req, res) => {
    dao.findAllFilms(function(data){
        res.send(data)
    })
})

//server start up
const port = 3000;
console.log("Open a bowser to http://localhost:"+port+" to view application");
app.listen(port)

