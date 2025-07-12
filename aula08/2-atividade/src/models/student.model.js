const mongoose = require('mongoose');
const studentCollection = 'students';

const studentSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true // indica obrigatório
  },
  sobrenome: {
    type: String,
    require: true // indica obrigatório
  },
  idade: {
    type: String,
    require: true,
  },
  dni: {
    type: String,
    require: true, // indica obrigatório
    unique: true
  },
  curso: {
    type: String,
    require: true // indica obrigatório
  },
  nota: {
    type: String,
    require: true // indica obrigatório
  }
})

const studentModel = mongoose.model(studentCollection, studentSchema);

module.exports = studentModel;