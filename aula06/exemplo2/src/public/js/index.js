const socket = io();

socket.on('messages', data => {
  render(data);
});

// funçao que renderiza as mensagens
function render(listaMensagens) {
  console.log("render", listaMensagens);
  const html = listaMensagens.map(msg => {
    return `<div><em>${msg.socket_id}</em> <em> - ${msg.text}</em></div>`;
  }).join("");
  document.getElementById("messages").innerHTML = html;
}

// Cria uma nova mensagem e a envia ao servidor
function addMessage(e) {
  var mensagem = {
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', mensagem);
  document.getElementById('texto').value = '';
  document.getElementById('texto').focus();

  return false;
}
