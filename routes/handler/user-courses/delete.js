const { UserCourses } = require('../../../models');

module.exports = async (req, res) => {
  const id = req.params.id;

  const userCourse = await UserCourses.findByPk(id);

  if (!userCourse) {
    return res.status(404).json({
      status: 'error',
      message: 'course not found'
    });
  }

  await userCourse.destroy();

  return res.json({
    status: 'success',
    message: 'course deleted'
  });
}