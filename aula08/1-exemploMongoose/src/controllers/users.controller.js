const usersService = require('../services/users.service');

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ message: "Cannot get users with mongoose: ", error });
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await usersService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: "Cannot get user with mongoose: ", error });
  }
}

const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = await usersService.createUser({ first_name, last_name, email, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
}

const updateUserAllFields = async (req, res) => {
  const { id } = req.params;
  const userData = req.body; // Assuming the entire user object is sent for update
  try {
    const updatedUser = await usersService.updateUserAllFields(id, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating user', error });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await usersService.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting user', error });
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const updatedUser = await usersService.updateUser(id, { password });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserAllFields,
  deleteUser,
  updateUser,
}