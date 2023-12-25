// controllers/userController.js
const User = require('../../models/index');
const userService = require('../../service/userService');

const getUsers = async (req, res) => {
  try {
    const { name, sortBy, sortOrder, page, pageSize } = req.query;
    const users = await userService.getUsers(name, sortBy, sortOrder, page, pageSize);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
};
