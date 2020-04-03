const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


//Verificação de Login
routes.post('/sessions' , SessionController.create);
// Listagem de Ongs
routes.get('/ongs' , OngController.index);
//Criação de Ongs
routes.post('/ongs', OngController.create);
//Lisagem de Incidents
routes.get('/incidents', IncidentController.index);
//Criação de Incidents
routes.post('/incidents', IncidentController.create);
//Delete Incidents
routes.delete('/incidents/:id', IncidentController.delete);
// Listagem filtrada
routes.get('/profile', ProfileController.index);



module.exports = routes;