const express = require('express');
// let dao = require("./mongo-dao")
const app = express();

app.use(express.json()); // Parse JSON body

// app.get("/films", (req, res) => {
//     dao.findAllFilms(function(data){
//         res.send(data)
//     })
// })

//server start up
const port = 3000;
app.listen(port, function() {
    console.log("Open a bowser to http://localhost:"+port+" to view application");
})

app.get('/', (req, res) => {
    console.log('it is working')
    res.send("it's working")
}
)
app.get('/test', (req, res) => {
    res.send('This is a test');
})
