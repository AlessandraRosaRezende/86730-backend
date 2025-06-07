import UserManager from "./UserManager.js";

const userManager = new UserManager();

const user1 = {
  name: "Lucas",
  sobrenome: "Lima",
  password: "123456",
};

userManager.addUser(user1);

console.log(userManager.getUsers())

const user2 = {
  name: "Lucas",
  sobrenome: "Lima",
  // password: "123456", // Senha correta
  password: "1234567", // Senha incorreta
};


userManager.validarUsuario(user2);

// nodejs.org/api/crypto.html


// Senha do user: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
// Senha do login: 8bb0cf6eb9b17d0f7d22b456f121257dc1254e1f01665370476383ea776df414