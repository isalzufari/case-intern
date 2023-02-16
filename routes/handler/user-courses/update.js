const {
  UserCourses,
  Courses,
  User
} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    users_id: 'number|empty:false',
    course_id: 'number|empty:false'
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const {
    users_id,
    course_id
  } = req.body;

  const user = await User.findByPk(users_id);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  const course = await Courses.findByPk(course_id);
  if (!course) {
    return res.status(404).json({
      status: 'error',
      message: 'course not found'
    });
  }

  const id = req.params.id;
  const userCourse = await UserCourses.findByPk(id);
  if (!course) {
    return res.status(404).json({
      status: 'error',
      message: 'user courses not found'
    });
  }

  await userCourse.update({
    users_id,
    course_id
  });

  return res.json({
    status: 'success',
    data: {
      id: userCourse.id
    }
  });
}