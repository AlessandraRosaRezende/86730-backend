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

const messages = [];

socketServer.on('connection', socket => {
  console.log('Novo socket conectado: ', socket.id);

  socket.emit('messages', messages); // Envia todas as mensagens anteriores

  socket.on('new-message', function(data) {
    data.socket_id = socket.id;
    messages.push(data); // armazena as mensagens recebidas
    console.log(messages)
    socketServer.emit('messages', messages) // enviar para todos os clientes
  })
})