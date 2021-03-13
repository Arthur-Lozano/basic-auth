'use strict';

const express = require('express');
const User = require('../models/users.js');
const encrypt = require('../auth/encrypt.js');
const verify = require('../auth/verify.js');

// const user = new User();

const router = express.Router();

//Initiate new user
router.post('/signup', encrypt, (req, res) => {
  res.status(200).json();
});

//Sign in for existing user
router.post('/signin', verify, (req, res) => {
  res.status(200).json();
});

module.exports = router;