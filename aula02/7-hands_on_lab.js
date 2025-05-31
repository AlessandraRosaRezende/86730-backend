require('colorized-console');
const soma = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num1 === 0 || num2 === 0) {
        reject("operação desnecessaria");
      }
      const soma = num1 + num2;
      if (soma < 0) {
        reject("deve retornar somente resultados positivos");
      } else {
        resolve(soma);
      }
    });
  };
  
  const subtracao = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num1 === 0 || num2 === 0) {
        reject("operação desnecessaria");
      }
      const subtracao = num1 - num2;
      if (subtracao < 0) {
        reject("deve retornar somente resultados positivos");
      } else {
        resolve(subtracao);
      }
    });
  };
  
  const multiplicacao = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num1 < 0 || num2 < 0) {
        reject("Fatores devem ser positivos");
      }
      const mult = num1 * num2;
      if (mult < 0) {
        reject("deve retornar somente resultados positivos");
      } else {
        resolve(mult);
      }
    });
  };
  
  const divisao = (num1, num2) => {
      return new Promise((resolve, reject) => {
        if (num1 <= 0 || num2 <= 0) {
          reject("Fatores devem ser positivos");
        }
        const div = num1 / num2;
        if (div < 0) {
          reject("deve retornar somente resultados positivos");
        } else {
          resolve(div);
        }
      });
    };
  
  const main = async () => {
    try {
      const resultado = await soma(40, 50);
      console.log("soma", resultado);
      const resultado1 = await multiplicacao(1, 50);
      console.log("multiplicacao", resultado1);
      const resultado2 = await subtracao(100, 50);
      console.log("subtracao", resultado2);
      const resultado3 = await divisao(100, 0);
      console.log("divisao", resultado3);  
    } catch (error) {
      console.error("catch => ", error);
    }
  };
  
  main();