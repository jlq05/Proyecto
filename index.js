var express = require('express')

var bodyParser = require('body-parser')

var app = express()

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
    bd_personas.push({
        nombre: consulta.body.nombre,
        puntaje: consulta.body.puntaje
    })
    respuesta.status(201).json({})
})

app.listen(puerto ,function () {
    
    console.log('servidor escuchando en ' + puerto)

})
