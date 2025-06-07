const geraNumeroAleatorio = () => {
  const num = Math.floor(Math.random() * 20) + 1 // ceil -> arredonda pra cima / floor -> arredonda pra baixo
  return num;
};

const geraLista = (limit) => {
  const array = new Array(limit);
  for (let i = 0; i < limit; i++) {
    array[i] = geraNumeroAleatorio();
  }
  return array
}
/*
{
19: 2,
4: 2,
16: 2,
}
*/

const contaNum = (array) => {
  const numeros = {}
  array.forEach((num) => {
    if (numeros[num]) {
       numeros[num] += 1
    } else {
      numeros[num] = 1;
    }
  })
  return numeros;
}

const lista = geraLista(20);
console.log(lista);
const numerosContados = contaNum(lista)
console.log(numerosContados);