import crypto from "crypto";

class UserManager {
  #users;

  constructor() {
    this.#users = [];
  }

  addUser(user) {
    user.password = this.#hashPassword(user.password);
    this.#users.push(user);
  }
  getUsers() {
    return this.#users;
  }
  #hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  validarUsuario(usuario) {
    const listUsers = this.getUsers();

    if (!listUsers.length) {
      console.log("Nenhum usuário cadastrado!");
      return;
    }
    
    const senhaAValidar = crypto
      .createHash("sha256")
      .update(usuario.password)
      .digest("hex");

    const userValidated = listUsers.find((user) => {
      console.log("Senha do user  :", user.password);
      console.log("Senha do login :", senhaAValidar);
      return user.name === usuario.name && user.password === senhaAValidar;
    });


    if (userValidated) {
      console.log("Usuário Logado!");
    } else {
      console.log("Usuário não logado!");
    }
  }
}

export default UserManager;

// https://nodejs.org/api/crypto.html
// jwt