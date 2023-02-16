const { Courses } = require('../../../models');

module.exports = async (req, res) => {
  const course = await Courses.findAll({
    attributes: ['id', 'title']
  });

  return res.json({
    status: 'success',
    data: course
  });
}