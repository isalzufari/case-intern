const { UserCourses } = require('../../../models');

module.exports = async (req, res) => {
  const userCourses = await UserCourses.findAll({
    attributes: ['id', 'users_id', 'course_id']
  });

  return res.json({
    status: 'success',
    data: userCourses
  });
}