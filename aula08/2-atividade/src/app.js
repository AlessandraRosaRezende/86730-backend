require('dotenv').config(); // na primeira linha
const express = require('express');
const studentRouter = require('./routes/student.router');
const dbConn = require('./db/connection');

const app = express();
app.use(express.json()); // para reconhecer o body
app.use(express.urlencoded({ extended: true })); // para reconhecer caracteres especiais, tipo acento

const PORT = process.env.PORT

dbConn;

app.use('/api/students', studentRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

// npm i express mongoose dotenv