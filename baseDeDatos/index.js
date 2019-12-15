var ClienteMongo = require('mongodb').MongoClient;

//var assert = require('assert');
 
// Connection URL
//var url = 'mongodb+srv://proyecto:pepito@cluster0-mknde.mongodb.net/test?retryWrites=true&w=majority';
 
var url = 'mongodb+srv://pepe:pepe@cluster0-mknde.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
var nombre_base_datos = 'test';
 
// Use connect method to connect to the server
ClienteMongo.connect(url, async function(err, cliente) {
//  assert.equal(null, err);
    if (err) {
        console.log('Hubo un error:' + JSON.stringify(err))
        process.exit(1)
    }

  console.log("Connected successfully to server");
  var db = cliente.db(nombre_base_datos);
  // await jugarConMongo(db);
   await db.collection('alumnos').insertOne( { nombre: "norman"})
    var alumnos =  await db.collection('alumnos').find().toArray()
    console.log(alumnos)
  cliente.close();
} );

module.exports = ClienteMongo;

//async function jugarConMongo(db) {
    
  
//}

//{ useUnifiedTopology: true}