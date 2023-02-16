const { CourseCategories } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: 'string|empty:false'
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const coursesCategories = await CourseCategories.findOne({
    where: { name: req.body.name }
  });

  if (coursesCategories) {
    return res.status(409).json({
      status: 'error',
      message: 'name already exist'
    });
  }

  const data = {
    name: req.body.name
  }

  const createdCoursesCategories = await CourseCategories.create(data);

  return res.json({
    status: 'success',
    data: {
      id: createdCoursesCategories.id
    }
  })
}