const express = require('express');
const router = express.Router();

const userCoursesHandler = require('./handler/user-courses');

/* GET users listing. */
router.post('/', userCoursesHandler.create);
router.get('/', userCoursesHandler.getAll);
router.put('/:id', userCoursesHandler.updated);
router.delete('/:id', userCoursesHandler.deleted);

module.exports = router;
