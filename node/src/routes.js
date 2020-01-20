const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('.//controllers/SearchController');
const routes = Router();

routes.post('/devs',DevController.store);
routes.get('/devs',DevController.getAll);

routes.get('/search',SearchController.find);

module.exports = routes;