const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//desaclopar o modulo de Routas do express em uma variavel(routes)
const routes = express.Router()


routes.post('/session', SessionController.create)
//Mudar app para routes
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)



// exporta variavel usando metodo module.exports
module.exports = routes 