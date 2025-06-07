const crypto = require("crypto");
const fs = require("fs").promises;
const path = require("path");

class UserManager {
  constructor() {
    this.dirPath = path.join(__dirname, "data");
    this.filePath = path.join(this.dirPath, "usuarios.json");
  }

  async addUser(user) {
    await this.#verificarEstrutura();

    user.password = this.#hashPassword(user.password);
    const users = await this.#lerArquivo();
    users.push(user);
    await this.#gravarArquivo(users);
  }

  async getUsers() {
    await this.#verificarEstrutura();
    return await this.#lerArquivo();
  }

  async validarUsuario(usuario) {
    const listUsers = await this.getUsers();

    const senhaAValidar = this.#hashPassword(usuario.password);

    const userValidated = listUsers.find(
      (user) => user.name === usuario.name && user.password === senhaAValidar
    );

    if (userValidated) {
      console.log("Usuário Logado!");
    } else {
      console.log("Usuário não logado!");
    }
  }

  // Métodos privados

  async #verificarEstrutura() {
    try {
      // Verifica/cria diretório
      try {
        await fs.access(this.dirPath);
      } catch {
        await fs.mkdir(this.dirPath, { recursive: true });
        console.log("Diretório criado:", this.dirPath);
      }

      // Verifica/cria arquivo
      try {
        await fs.access(this.filePath);
      } catch {
        await fs.writeFile(this.filePath, "[]");
        console.log("Arquivo criado:", this.filePath);
      }
    } catch (error) {
      console.error("Erro ao verificar estrutura:", error);
    }
  }

  async #lerArquivo() {
    try {
      const result = await fs.readFile(this.filePath, "utf-8");
      if (!result) {
        console.log("Arquivo vazio, retornando array vazio.");
        return [];
      }
      return JSON.parse(result);
    } catch (error) {
      console.error("Erro ao ler arquivo:", error);
      return [];
    }
  }

  async #gravarArquivo(data) {
    try {
      const dataToSave = JSON.stringify(data, null, 2);
      await fs.writeFile(this.filePath, dataToSave);
    } catch (error) {
      console.error("Erro ao gravar arquivo:", error);
    }
  }

  #hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }
}

module.exports = UserManager;
