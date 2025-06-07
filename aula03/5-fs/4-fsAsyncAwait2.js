const fs = require("fs").promises;
const path = require("path");

const dirPath = path.join(__dirname, "data");
const filePath = path.join(dirPath, "usuarios.json");

// Função para garantir que o diretório e o arquivo existam
const verificarEstrutura = async () => {
  try {
    // Verifica se o diretório existe, senão cria
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }

    // Verifica se o arquivo existe, senão cria com array vazio
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, "[]");
    }
  } catch (err) {
    console.log("Erro ao verificar estrutura:", err);
  }
};

const lerArquivo = async () => {
  try {
    const result = await fs.readFile(filePath, "utf-8");
    if (!result) {
      console.log("Arquivo vazio, retornando array vazio.");
      return [];
    }
    // console.log(result);
    // console.log(typeof result);
    return JSON.parse(result);
  } catch (error) {
    console.log("Erro ao ler o arquivo:", error);
    return [];
  }
};

const gravarArquivo = async (data) => {
  try {
    const dataToSave = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, dataToSave);
  } catch (error) {
    console.log("Erro ao gravar o arquivo:", error);
  }
};

const main = async () => {
  try {
    await verificarEstrutura();
    const resultado = await lerArquivo();
    console.log(resultado);
    const usuario = { name: "Alê", age: 37 };
    resultado.push(usuario);
    // await gravarArquivo(usuario);
    await gravarArquivo(resultado); // AQUI ESTAVA O ERRO, PESSOAL!!!!!! EU ESTAVA SALVANDO O USUÁRIO, E NÃO O RESULTADO

    const resultado2 = await lerArquivo();
    console.log(resultado2);

    if (resultado.length > 0) {
      console.log(resultado[0].name);
    } else {
      console.log("Nenhum usuário encontrado.");
    }

    // Exemplo de adição de um novo usuário
    const novoUsuario = { name: "João", age: 30 };
    resultado.push(novoUsuario);
    // await gravarArquivo(novoUsuario);
    await gravarArquivo(resultado);
    console.log("Usuário adicionado com sucesso.");

    // Lendo novamente para verificar a adição
    const usuariosAtualizados = await lerArquivo();
    console.log("Usuários atualizados:", usuariosAtualizados);

  } catch (error) {
    console.log("Erro no main:", error);
  }
};

main();