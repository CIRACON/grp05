const mongodb = require("mongodb");                  
const url = "mongodb://localhost:27017";
let dbPool;

mongodb.MongoClient.connect(url, function(err, client) {
    if (!err) {
        dbPool = client.db("swapi"); 
        console.log("DB Connected")
    }else{
      console.log("DB CONNECTION FAILED. Is database running?");
    }
});

module.exports.call = function call(operation, parameters, callback) {
    switch (operation.toLowerCase()) {
        case 'getAllCharacters':
            console.log('Get all characters');
            callback("test", '')
            break;
        case 'getFilmByID':
            console.log('getFilmByID');
            callback("test", '')
            break;
        case 'getCharacterByID':
            console.log('getCharacterByID');
            break;
        case 'getSpeciesByID':
            console.log('getSpeciesByID');
            break;
        case 'getPlanetByID':
            console.log('getPlanetByID');
            break;
    }

    console.log( 'call complete: ' + operation );
    return 'call complete';
}

