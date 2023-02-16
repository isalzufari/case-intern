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

  const id = req.params.id;
  const course = await Courses.findByPk(id);
  if (!course) {
    return res.status(404).json({
      status: 'error',
      message: 'courses not found'
    });
  }

  await course.update({
    title: req.body.title,
    course_category_id: req.body.course_category_id
  });

  return res.json({
    status: 'success',
    data: {
      id: course.id,
      title: course.title,
      course_category_id: course.course_category_id
    }
  });
}