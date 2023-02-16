const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */
router.post('/login', usersHandler.login);
router.post('/logout', verifyToken, usersHandler.logout);
router.post('/register', usersHandler.register);

module.exports = router;
