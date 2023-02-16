const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: 'string|empty:false',
    email: 'email|empty:false',
    password: 'string|min:6'
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);
  const {
    name,
    email
  } = req.body;

  await user.update({
    name,
    email,
    password
  });

  return res.json({
    status: 'success',
    data: {
      id: user.id,
      name,
      email
    }
  });
}