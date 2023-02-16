const express = require('express');
const router = express.Router();

const courseCategoriesHandler = require('./handler/course-categories');

/* GET users listing. */
router.post('/', courseCategoriesHandler.create);
router.get('/', courseCategoriesHandler.getAll);
router.put('/:id', courseCategoriesHandler.updated);
router.delete('/:id', courseCategoriesHandler.deleted);

module.exports = router;
