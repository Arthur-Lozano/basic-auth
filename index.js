'use strict';

const server = require('./src/server.js');
require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;


const options = { useNewUrlParser: true, useUnifiedTopology: true }; // always pass in these options

mongoose.connect(MONGODB_URI, options)
.then(() => {
  server.start(process.env.PORT || 3333);
});