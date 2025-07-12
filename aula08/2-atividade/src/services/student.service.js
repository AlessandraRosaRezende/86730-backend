const studentModel = require('../models/student.model');

const getAllStudents = async() => {
  let users = await studentModel.find();
  return users;
};

const getStudentById = async(id) => {
  let user = await studentModel.findById(id);
  return user;
}

const createStudent = async (userData) => {
  const newUser = await studentModel.create(userData);
  return newUser
}

const updateStudentAllFields = async (id, userData) => {
  const userUpdated = await studentModel.findByIdAndUpdate(id, userData, { new: true }); // devolve o registro jã atualizado
  return userUpdated;
}

const deleteStudent = async (id) => {
  const userDeleted = await studentModel.findByIdAndDelete(id);
  return userDeleted;
}

const updateStudent = async (id, userData) => {
  const userUpdated = await studentModel.findByIdAndUpdate(id, userData, { new: true });
  return userUpdated;
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentAllFields,
  deleteStudent,
  updateStudent,
}