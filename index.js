var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var puerto = process.env.PORT || 3000

var bd_personas = []

app.use(bodyParser.urlencoded({extended: false }))

app.use(bodyParser.json())

app.use(express.static('./recursos-estaticos'))

app.get('/api/personas',function ( _, respuesta) {
    respuesta.json({ personas: bd_personas})
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

app.listen(puerto ,function () {
    
    console.log('servidor escuchando en ' + puerto)

})
