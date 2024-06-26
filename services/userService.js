const User = require('../models/userModel');

exports.createUser = async (userData) => {
  // await User.deleteMany()
  const user = new User(userData);
  
  return await user.save();
};

exports.getAllUsers = async () => {
  return await User.find({ isDeleted: false });
};

exports.getUserById = async (userId) => {
  return await User.findById(userId);
};

exports.updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

exports.softDeleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
};
