const express = require('express');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/view.routes');
const { Server } = require('socket.io');
const path = require('path');

const app = express();

const httpServer = app.listen(8080, () => console.log('Ouvindo na porta 8080'));

const socketServer = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use('/', viewsRouter);

socketServer.on('connection', socket => {
  console.log('Novo socket conectado');

  socket.on('message', data => {
    console.log(data);
  })

  socket.emit('evento_so_para_socket', 'Mensagem enviada para o socket');

  socket.broadcast.emit('evento_para_todos_menos_um', 'Mensagem enviada para todos os sockets, menos para quem o enviou')

  socketServer.emit('evento_para_todos', 'Mensagem enviada para TODOS')
})