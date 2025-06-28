const socket = io();

Swal.fire({
  title: 'Bem vindo ao CoderZap!',
  input: 'text',
  text: 'Digite um nome para começar a conversar',
  allowOutsideClick: false,
  inputValidator: (value) => {
    return !value && 'Você precisa digitar seu nome!'
  },
}).then((result) => {
  username = result.value;

  socket.emit('authenticated', username)

  // 🔔 Toast quando um novo usuário se conecta (exceto o próprio)
  socket.on('new-user-connected', (username) => {
    Swal.fire({
      toast: true,
      position: 'top-right',
      icon: 'info',
      title: `${username} acabou de entrar no chat!`,
      timer: 5000,
    });
  });
});

socket.on('messages', data => {
  render(data);
});

// funçao que renderiza as mensagens
function render(listaMensagens) {
  const html = listaMensagens.map(msg => {
    return `<div><strong>${msg.user || 'Anônimo'}</strong>: ${msg.text}</div>`;
  }).join("");
  document.getElementById("messages").innerHTML = html;
}

// Cria uma nova mensagem e a envia ao servidor
function addMessage(e) {
  var mensagem = {
    text: document.getElementById('texto').value,
    user: user
  };

  socket.emit('new-message', mensagem);
  document.getElementById('texto').value = '';
  document.getElementById('texto').focus();

  return false;
}

