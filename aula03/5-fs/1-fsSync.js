// const fs = require("fs");

// fs.writeFileSync("./data/exemplo.txt", "Hello Coders! Virei um arquivo! Uhulll!!!"); // cria e escreve no arquivo, sobrescrevendo o que já tem

// const exists = fs.existsSync("./data/exemplo.txt");
// console.log(exists)
// if (exists) {
//   let conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
//   console.log(conteudo);

//   fs.appendFileSync("./data/exemplo.txt", " Mais conteudo!!"); // acrescenta mais conteúdo

//   conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
//   console.log(conteudo);

//   fs.unlinkSync("./data/exemplo.txt"); // deleta o arquivo
// }

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "data");
const filePath = path.join(dirPath, "exemplo.txt");

// Verifica se o diretório 'data' existe, se não, cria
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Cria ou sobrescreve o arquivo
fs.writeFileSync(filePath, "Hello Coders! Virei um arquivo! Uhulll");

let exists = fs.existsSync(filePath);
console.log("Arquivo existe?", exists);

if (exists) {
  let conteudo = fs.readFileSync(filePath, "utf-8");
  console.log("Conteúdo inicial:", conteudo);

  fs.appendFileSync(filePath, " Mais conteúdo!!");

  conteudo = fs.readFileSync(filePath, "utf-8");
  console.log("Conteúdo final:", conteudo);
// }
  fs.unlinkSync(filePath);
  console.log("Arquivo deletado.");
  // deletar diretório
  fs.rmdirSync(dirPath)
  console.log("Diretório deletado.");
}
