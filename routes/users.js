const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */
router.post('/login', usersHandler.login);
router.post('/logout', verifyToken, usersHandler.logout);
router.post('/register', usersHandler.register);
router.get('/', usersHandler.getAll);
router.put('/:id', verifyToken, usersHandler.updated);
router.delete('/:id', verifyToken, usersHandler.deleted);

module.exports = router;
