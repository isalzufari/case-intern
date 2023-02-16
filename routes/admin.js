const express = require('express');
const router = express.Router();

const adminHandler = require('./handler/admin');
const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */
router.post('/login', adminHandler.login);
router.post('/logout', verifyToken, adminHandler.logout);
router.post('/register', adminHandler.register);

module.exports = router;
