var express = require('express');

var app = express();

var bd_personas = []

var bodyParser = require('body-parser');

var cors = require('cors')

var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb+srv://pepe:pepe@cluster0-mknde.mongodb.net/test?retryWrites=true&w=majority';

var nombre_base_datos = 'test';

var puerto = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false }))

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('./migame'))

app.get('/api/personas',function ( _, respuesta) {
    respuesta.json({ bd_personas})
})

app.post('/api/personas', function (consulta, respuesta) {
   // var nombre = consulta.body.Nombre
    var nombre = consulta.body.nombre
    bd_personas.push(nombre)

    var puntaje = consulta.body.puntaje
    bd_personas.push(puntaje)
   respuesta.status(201).redirect("https://thegameofbatman.herokuapp.com/")
   //bd_personas.push({
     //   nombre: consulta.body.nombre,
     //   puntaje: consulta.body.puntaje
   // })
   // respuesta.status(201).json({})
})
//
ClienteMongo.connect(url, async function(err, cliente) {
  //  assert.equal(null, err);
      if (err) {
          console.log('Hubo un error:' + JSON.stringify(err))
          process.exit(1)
      }
  
    console.log("Connected successfully to server");
    var db = cliente.db(nombre_base_datos);
    // await jugarConMongo(db);
     await db.collection('alumnos').insertOne( { nombre: "nombre"})
      var alumnos =  await db.collection('alumnos').find().toArray()
      console.log(alumnos)
    cliente.close();
  } );
    
//
app.listen(puerto ,function () {
    
    console.log('servidor escuchando en ' + puerto)

})
