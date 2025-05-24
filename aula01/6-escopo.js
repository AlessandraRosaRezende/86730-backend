const xablau = 2;
const pi = 3.14;

function potenciaDeDois(a) {
  if (a == undefined) {
    return "Deu zica";
  }
  const batatinha = pi*2;
  console.log(batatinha);
  const potencia = 2;
  console.log(potencia);
  return Math.pow(a, potencia);
}

function potenciaDeTres(a) {
  const potencia = 3;
  console.log(potencia);
  return Math.pow(a, potencia);
}

const teste = 2;

//console.log(potenciaDeDois(teste));
//console.log(potencia)
//console.log(potenciaDeTres(3));

function xablau1() {
  const i = 1;
  const j = 2;
  let h = 3;
  console.log(i, j, h);
  if (true) {
    h = 4;
    console.log('dentro do 1 if', i, j, h);
    if (true) {
      h = 5
      console.log('dentro do 2 if', i, j, h);
    }
  }
  console.log('fora dos ifs', i, j, h);
}
console.log(i, j, h);
xablau1()