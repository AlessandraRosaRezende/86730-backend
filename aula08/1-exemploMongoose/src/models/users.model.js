const mongoose = require('mongoose');
const userCollection = 'users';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true // indica obrigatório
  },
  last_name: String,
  email: {
    type: String,
    unique: true // indica campo único, não pode ser repetido
  }
})

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;