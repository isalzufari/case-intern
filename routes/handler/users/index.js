const login = require('./login');
const logout = require('./logout');
const register = require('./register');
const getAll = require('./getAll');
const updated = require('./update');
const deleted = require('./delete');

module.exports = {
  login,
  logout,
  register,
  getAll,
  updated,
  deleted
}