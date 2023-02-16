const express = require('express');
const router = express.Router();

const courseHandler = require('./handler/courses');

/* GET users listing. */
router.post('/', courseHandler.create);
router.get('/', courseHandler.getAll);
router.put('/:id', courseHandler.updated);
router.delete('/:id', courseHandler.deleted);

module.exports = router;
