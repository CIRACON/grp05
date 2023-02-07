// mongo client library
const mongod = require("mongodb"); 

const url  = "mongodb://localhost:27017/CHANGE_THIS_DATABASE_NAME"

let dbPool; // database connection

// mongod.MongoDBNamespace.MongoClient.connect(url, function(err, db))