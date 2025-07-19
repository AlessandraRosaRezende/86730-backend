require('dotenv').config(); // na primeira linha
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

const dbConn = mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Conexão com Mongo Atlas feita com sucesso!');
  })
  .catch((error) => {
    if (error) {
      console.log('Não foi possível conectar ao banco de dados: ', error);
      process.exit()
    }
  })

  module.exports = dbConn;
