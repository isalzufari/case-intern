const { CourseCategories } = require('../../../models');

module.exports = async (req, res) => {
  const id = req.params.id;

  const courseCategories = await CourseCategories.findByPk(id);

  if (!courseCategories) {
    return res.status(404).json({
      status: 'error',
      message: 'course categories not found'
    });
  }

  await courseCategories.destroy();

  return res.json({
    status: 'success',
    message: 'course categories deleted'
  });
}