const UserManager = require("./UserManager");

const main = async () => {
  const userManager = new UserManager();

  const user1 = {
    name: "Lucas",
    password: "123456",
  };

  await userManager.addUser(user1);
  const users = await userManager.getUsers();
  console.log(users);

  const user2 = {
    name: "Lucas",
    // password: "1234567", // Senha incorreta para testar a validação
    password: "123456", // Senha correta para testar a validação
  };

  await userManager.validarUsuario(user2);

  const user3 = {
    name: "Alessandra",
    password: "ale123"
  };

  await userManager.addUser(user3)
};

main();