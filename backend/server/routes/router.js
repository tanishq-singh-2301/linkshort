const express = require('express');
const route = express.Router();

const controller = require('../controller/controller');

route.get('/', controller.home);
route.get('/v/:id', controller.find);
route.post('/api/set', controller.set);

module.exports = route;