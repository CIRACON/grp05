const mongodb = require("mongodb");                  
const url = "mongodb://localhost:27017";
let dbPool, collection;

mongodb.MongoClient.connect(url, function(err, client) {
    if (!err) {
        dbPool = client.db("swapi"); 
        console.log("DB Connected")
    }else{
      console.log("DB CONNECTION FAILED. Is database running?");
    }
});

module.exports.getAll = (type, callback) => {
  (dbPool.collection(type)).find().toArray((err, data) => callback(data))
}

module.exports.getById = (type, id, callback) => {
  (dbPool.collection(type)).find({"_id": mongodb.ObjectId(id)}).toArray((err, data) => callback(data))
}