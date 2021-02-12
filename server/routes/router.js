const express = require('express');
const route = express.Router();

const services = require('../services/render');

route.get('/', services.homeRoutes);

route.get('/about', services.aboutRoutes);

route.get('/contact', services.contactRoutes);


module.exports = route;