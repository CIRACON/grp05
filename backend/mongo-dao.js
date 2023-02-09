const { departments } = require("./departments.js")
const { divisions } = require("./divisions.js")
const { work_locations } = require("./work_locations")
const mongodb = require("mongodb");
const url = "mongodb://localhost:27017";
let dbPool;

mongodb.MongoClient.connect(url, function (err, client) {
  if (!err) {
    dbPool = client.db("enterprise-data");
    console.log("DB Connected");

    applyDBData();
  } else {
    console.log("DB CONNECTION FAILED. Is database running?");
  }
});

const applyDBData = () => {
  try {
    dbPool.collection('employees').drop()
    dbPool.collection('credentials').drop()
  } catch (ex) {
    //Do nothing, collections do not exist
  }

  for (let i = 0; i < 100; i++) {
    dbPool.collection("employees").insertOne(
      {
        'name': `employee #${i}`,
        'phone_number': '000-000-0000',
        'job_role': 'Software Engineer',
        'work_location': work_locations[Math.floor(Math.random() * work_locations.length)],
        'salary': 1.50,
        'manager': 'Bob',
        'division': divisions[Math.floor(Math.random() * divisions.length)],
        'department': departments[Math.floor(Math.random() * departments.length)] //Make division and department correlated, combine arrays into 2D
      }
    )

    dbPool.collection('credentials').insertOne(
      {
        'username': `e${i}`,
        'password': 'password'
      }
    )
  }
}

module.exports.login = async (username, password, callback) => {
  callback(
    await dbPool
      .collection("credentials")
      .countDocuments({ 'username': username, 'password': password }) === 1 ? 200 : 401
  )
}

//Passing in the user calling's employee id/name/identification information to find way to redact salary information
module.exports.filterEmployees = (filter, callback) =>
  (dbPool.collection('employees')).find(filter).toArray((err, data) => callback(data))