const socket = io();

socket.emit('message', 'Mensagem do cliente para o servidor')

socket.on('evento_so_para_socket', data => {
  console.log(data);
});

socket.on('evento_para_todos_menos_um', data => {
  console.log(data);
});

socket.on('evento_para_todos', data => {
  console.log(data);
});