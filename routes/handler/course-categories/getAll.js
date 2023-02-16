const { CourseCategories } = require('../../../models');

module.exports = async (req, res) => {
  const courseCategories = await CourseCategories.findAll({
    attributes: ['id', 'name']
  });

  return res.json({
    status: 'success',
    data: courseCategories
  });
}