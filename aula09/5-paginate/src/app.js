require('dotenv').config();
const mongoose = require('mongoose');
const userModel = require('./models/user.model');

const environment = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  let users = await userModel.paginate({gender: 'Female'}, { page: 1, limit: 10 });
  console.log('Pagina 1: ', users);
  
  users = await userModel.paginate({ gender: 'Female' }, { page: 2, limit: 10 });
  console.log('Pagina 2: ', users);

  users = await userModel.paginate({ gender: 'Female' }, { page: 426, limit: 10 });
  console.log('Pagina 426: ', users);
};

environment();