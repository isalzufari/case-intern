const { CourseCategories } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: 'string|empty:false',
  }

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const id = req.params.id;
  const courseCategories = await CourseCategories.findByPk(id);
  if (!courseCategories) {
    return res.status(404).json({
      status: 'error',
      message: 'categories not found'
    });
  }

  await courseCategories.update({
    name: req.body.name
  });

  return res.json({
    status: 'success',
    data: {
      id: courseCategories.id,
      name: req.body.name
    }
  })
}