// const data = new Date()
// console.log(data)
// console.log("Tarefa Iniciada!");
// console.log("Executando...");
// console.log("Continuação...");
// console.log("Tarefa Terminada!");

// const data = new Date()
// console.log(data)
// const temporizador = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 5000);
// };

// let operacao = () => console.log("Executando...");

// console.log("Tarefa Iniciada!");
// temporizador(operacao);
// console.log("Tarefa Terminada!");
// console.log(data)

const data = new Date();
console.log(data);

const temporizador = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

let operacao = () => console.log("Executando...");

const main = async () => {
  console.log("Tarefa Iniciada!");
  operacao();
  await temporizador(); // espera 5 segundos
  operacao();           // só executa depois do timeout
  console.log("Tarefa Terminada!");
  console.log(new Date());
};

main();
