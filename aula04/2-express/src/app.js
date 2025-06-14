const express = require('express');

const app = express();

app.get('/', (req, res) => { // GET -> verbo HTTP
  res.send('Vá para a rota /saudar')
});

app.get('/saudar', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send('Olá, sejam bem vindos! Agora do express!')
});

app.listen(8080, () => {
  console.log('Servidor na porta 8080');
})

// GET, POST, PUT, PATCH, DELETE -> CRUD
// ler, criar, alterar (put e patch), deletar