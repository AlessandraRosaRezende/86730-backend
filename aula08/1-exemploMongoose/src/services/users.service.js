const userModel = require('../models/users.model');

const getAllUsers = async() => {
  let users = await userModel.find();
  return users;
};

const getUserById = async(id) => {
  let user = await userModel.findById(id);
  return user;
}

const createUser = async (userData) => {
  const newUser = await userModel.create(userData);
  return newUser
}

const updateUserAllFields = async (id, userData) => {
  const userUpdated = await userModel.findByIdAndUpdate(id, userData, { new: true }); // devolve o registro jã atualizado
  return userUpdated;
}

const deleteUser = async (id) => {
  const userDeleted = await userModel.findByIdAndDelete(id);
  return userDeleted;
}

const updateUser = async (id, userData) => {
  const userUpdated = await userModel.findByIdAndUpdate(id, userData, { new: true });
  return userUpdated;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserAllFields,
  deleteUser,
  updateUser
}