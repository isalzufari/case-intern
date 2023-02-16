const {
  Admin,
  RefreshToken
} = require('../../../models');

module.exports = async (req, res) => {
  // console.log(req);
  const userId = req.user.data.id;
  // console.log(userId); 
  const user = await Admin.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  await RefreshToken.destroy({
    where: { user_id: userId }
  });

  return res.json({
    status: 'success',
    message: 'refresh token deleted'
  });
}