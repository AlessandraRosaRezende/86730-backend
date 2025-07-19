const studentService = require('../services/student.service');

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    return res.status(200).json(students)
  } catch (error) {
    return res.status(500).json({ message: "Cannot get students with mongoose: ", error });
  }
}

const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await studentService.getStudentById(id);
    if (!student) {
      return res.status(404).json({ message: 'student not found' })
    }
    return res.status(200).json(student)
  } catch (error) {
    return res.status(500).json({ message: "Cannot get student with mongoose: ", error });
  }
}

const createStudent = async (req, res) => {
  const studentData = req.body;
  try {
    const newStudent = await studentService.createStudent(studentData);
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating student', error });
  }
}

const updateStudentAllFields = async (req, res) => {
  const { id } = req.params;
  const studentData = req.body; // Assuming the entire Student object is sent for update
  try {
    const updatedStudent = await studentService.updateStudentAllFields(id, studentData);
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    return res.status(200).json(updatedStudent);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating student', error });
  }
}

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await studentService.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    return res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting student', error });
  }
}

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const updatedStudent = await studentService.updateStudent(id, { password });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentAllFields,
  deleteStudent,
  updateStudent,
}