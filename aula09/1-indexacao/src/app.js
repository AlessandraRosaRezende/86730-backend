require('dotenv').config();
const userModel = require('./models/user.model');
const mongoose = require('mongoose');

const environment = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  let response = await userModel.find({ first_name: "Anselma" }).explain('executionStats');
  console.log(response);
};

environment();