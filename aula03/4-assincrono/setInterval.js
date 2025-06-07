// console.log("Tarefa Iniciada!");
// console.log("Executando...");

// for (let index = 1; index <= 5; index++) {
//   console.log(index);
// }
// console.log("Tarefa Terminada!");

// const contador = () => {
//   let counter = 1
//   console.log("Executando...");
//   let timer = setInterval(() => { // assíncrona
//     console.log(counter++)
//     if (counter > 5) {
//       clearInterval(timer)
//     }
//   }, 1000)
// };

// console.log("Tarefa Iniciada!");
// contador()
// console.log("Tarefa Terminada!");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const contador = async () => {
  console.log("Executando...");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000); // espera 1 segundo antes de continuar ou 1000 milissegundos
  }
};

const main = async () => {
  console.log("Tarefa Iniciada!");
  await contador(); // espera terminar antes de continuar
  console.log("Tarefa Terminada!");
};

main();
