'use strict';

//3rd Party Resources

const express = require('express');
const mongoose = require('mongoose');
//Bring in the routes
const routes = require('../src/routes/routes.js');

//Prepare the express app
const app = express();

//Process JSON input and put the data on req.body
app.use(express.json());

//Process FORM input and put the data on the req.body
app.use(express.urlencoded({extended: true}));

app.use('/', routes);


function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

module.exports = {
  app: app,
  start: start
}