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

  const e_size = 100
  const ten = e_size / 10

  for (let i = 0; i <= e_size; i++) {
    dbPool.collection("employees").insertOne(
      {
        'id': `${i}`,
        'name': `employee #${i}`,
        'phone_number': '000-000-0000',
        'job_role': 'Software Engineer',
        'work_location': work_locations[Math.floor(Math.random() * work_locations.length)],
        'salary': 1.50,
        'manager': i !== e_size ? i < ten ? `employee #${e_size}` : `employee #${i % 10}` : '',
        'direct_reports': i < ten ? getDirectReports(i * ten, (i + 1) * ten) : i === e_size ? getDirectReports(0, ten) : [],
        'division': divisions[Math.floor(Math.random() * divisions.length)],
        'department': departments[Math.floor(Math.random() * departments.length)] //Make division and department correlated, combine arrays into 2D
      }
    )

    dbPool.collection('credentials').insertOne(
      {
        'username': `e${i}`,
        'password': 'password',
        'id': i
      }
    )
  }
}

const getDirectReports = (start, end) => {
  let reports = []

  for (let i = start; i < end; i++) {
    reports.push(`employee #${i}`)
  }

  return reports
}

module.exports.login = async (username, password, callback) => {
  callback(
    await dbPool
      .collection("credentials")
      .findOne({ 'username': username, 'password': password })
  )
}

//Passing in the user calling's employee id/name/identification information to find way to redact salary information
module.exports.filterEmployees = (filter, callback) => {
  const callerId = filter.caller_id;
  delete filter.caller_id;

  (dbPool.collection('employees')).find(filter).toArray((err, data) => {
    dbPool.collection('employees').findOne({ "id": callerId }).then(caller => {
      callback(data.map(employee => {
        if (
          !caller ||
          (employee.manager !== caller.name && employee.name !== caller.name && caller.department !== 'HR')
        ) delete employee['salary']

        delete employee['_id']

        return employee
      }))
    })
  })

}

module.exports.getAll = (resource, callback) => {

  switch (resource) {
    case 'worklocations':
      callback(work_locations)
      break
    case 'divisions':
      callback(divisions)
      break
    case 'departments':
      callback(departments)
      break
    default:
      callback([])
      break
  }

}