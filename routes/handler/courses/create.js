const { Courses } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: 'string|empty:false',
    course_category_id: 'number|empty:false'
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const courses = await Courses.findOne({
    where: { title: req.body.title }
  });

  if (courses) {
    return res.status(409).json({
      status: 'error',
      message: 'title already exist'
    });
  }

  const data = {
    title: req.body.title,
    course_category_id: req.body.course_category_id
  }

  const createdCourses = await Courses.create(data);

  return res.json({
    status: 'success',
    data: {
      id: createdCourses.id,
      title: req.body.title
    }
  });
}