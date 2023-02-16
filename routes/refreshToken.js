const express = require('express');
const router = express.Router();

const refreshTokenHandler = require('./handler/refresh-tokens');

/* GET users listing. */
router.post('/', refreshTokenHandler.getToken);

module.exports = router;
