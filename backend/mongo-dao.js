const mongodb = require("mongodb");                  
const url = "mongodb://localhost:27017";
let dbPool;

mongodb.MongoClient.connect(url, function(err, client) {
    if (!err) {
        dbPool = client.db("enterprise-data"); 
        
        console.log("DB Connected")
    }else{
      console.log("DB CONNECTION FAILED. Is database running?");
    }
});