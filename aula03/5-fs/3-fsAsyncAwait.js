const fs = require("fs").promises;
const path = require("path");

const dirPath = path.join(__dirname, "data");
const filePath = path.join(dirPath, "data-hora.txt");

const salvarDataHora = async () => {
  try {
    // Verifica se o diretório 'data' existe, senão cria
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
      console.log("Diretório 'data' criado.");
    }

    const dataAtual = new Date().toLocaleString(); // ou .toISOString()
    await fs.writeFile(filePath, `Data e hora atuais: ${dataAtual}`);
    console.log("Arquivo criado com sucesso!");

    const conteudo = await fs.readFile(filePath, "utf-8");
    console.log("Conteúdo do arquivo:");
    console.log(conteudo);
  } catch (err) {
    console.error("Erro ao manipular o arquivo:", err);
  }
};

salvarDataHora();
