require("colorized-console")

const numero = 10;

const num = '10'

// console.log(num === numero); // falso -> compara valor e tipo
// console.log(num == numero); // true -> compara apenas o valor
// console.log(num != numero); // false -> compara apenas o valor
// console.log(num !== numero); // true -> compara valor e tipo

// true
// if (num === 10) {
//   console.log("É igual a 10");
// } else {
//   console.error("É diferente de 10");
// }



    // true
// if (numero === 10) {
//   console.log("É igual a 10");
// } else if (numero === 9){
//   console.log("É igual a 9");
// } else {
//   console.error("É diferente de 9 e 10");
// }


// switch (numero) {
//   case 10:
//     console.log("É igual a 10");
//     break;
//   case 9:
//     console.log("É igual a 9");
//     break;
//   default:
//     console.log("Nenhum numero conhecido");
//     break;
// }

const statusCode = 404;
const xablau = {
  // key  value
  404: "Not Found",
  9: "O valor é 9",
  8: "O valor é 8",
  100: "Valor é grandao"
};

console.log(xablau[statusCode]);

