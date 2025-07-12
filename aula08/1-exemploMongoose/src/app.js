const express = require('express');
const userRouter = require('./routes/user.router');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/coderhouse?retryWrites=true&w=majority')
.catch((error) => {
  if(error) {
    console.log('Não foi possível conectar ao banco de dados: ', error);
    process.exit()
  }
})

app.use('/api/users', userRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})
// npm i express mongoose