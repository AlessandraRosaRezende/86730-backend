require('colorized-console');

const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      if (divisor === 0) {
        reject("Não é possível dividir por zero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 2000);
  });
};

// console.log(divisao(4, 2));

// divisao(400, 2)
//   .then((result) => {
//     console.log(result); // 200
//     divisao(result, 2)
//       .then((result) => {
//         console.log(result); // 100
//         divisao(result, 5)
//           .then((result) => {
//             console.log(result); // 100
//           })
//           .catch((error) => {
//             console.error(".catch do dividir: ", error);
//           });
//       })
//       .catch((error) => {
//         console.error(".catch do dividir: ", error);
//       });
//   })
//   .catch((error) => {
//     console.error(".catch do dividir: ", error);
//   });

const dividir = async (dividendo, divisor) => {
  try {
    const resultado = await divisao(dividendo, divisor);
    console.log(resultado);
    console.log(2+4);
  } catch (error) {
    console.error(".catch do dividir: ", error);
  }
}

console.log(dividir(400, 2));