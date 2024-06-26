const UserService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(200).json({ message: 'User created successfully',code:200,data:user});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({
      message: 'Users Fetched Successfully',
      code:200,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User Id By Information Fetched Successfully',code:200, data: user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.userId, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully',code:200, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.softDeleteUser = async (req, res) => {
  try {
    const user = await UserService.softDeleteUser(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User soft deleted successfully',code:200, });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
