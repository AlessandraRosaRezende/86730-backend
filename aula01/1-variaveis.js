const numero = 10;
// console.log(numero)

const nome = "Alessandra";
// console.log(nome)

// let idade = 35;
// //console.log(idade)
const idade = 36;
//console.log(aidade)

const bool = true; // false
// console.log(bool)

//     index    0             1         2       3         4
const array = ["bicicleta", "carro", "moto", "barco", "patinete"];
// console.log(array[4]);
// console.log(array.length);

//     index    0           1      2   3    4
const array2 = ["bicicleta", true, 3, nome, idade];// string, boolean, number, variavel, variavel
// console.log(array2);

const nomeProfessor = "Alê"
const idadeProfessor = 35

const pessoa = {
// key  value
  nome: "Alê",
  idade: 35,
  professor: true,
  tutor: false,
};
// console.log(pessoa);

// formas de acessar chaves em um objeto
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

const produto = [{
  nome: "Bebedouro de Mesa para Garrafão EOS Mineralle Eletrônico Branco EBE03B Bivolt",
  preco: 353.63,
  codBarras: 7898500000000,
},
{
  nome: "notebook",
  preco: 3500,
  codBarras: 7898500000001,
}]
console.log(produto);


const educadores = [
  {
    nome: "Alê",
    idade: 35,
    professor: true, // index 0
    tutor: false,
  },
  {
    nome: "Guilherme",
    idade: 34,
    professor: false, // index 1
    tutor: true,
  }
];
console.log(educadores[0].nome);

const produtos = [
  {
    titulo: "Bebedouro de Mesa para Garrafão EOS Mineralle Eletrônico Branco EBE03B Bivolt",
    rate: 4.5,
    parcelamento: "R$ 353,63 em 5x de R$ 70,73 sem juros", 
    preco: 353.63, 
    descontoPix: 7,
    precoPix: 318.27
  }
];

// console.log(educadores[0]);
// console.log(educadores[0].nome)

// retorna array de array, onde cada array é um par [chave, valor]
console.log(Object.entries(produtos[0]));

// retorna as chaves em um array
console.log(Object.keys(produtos[0]));

// retorna os valores em um array
console.log(Object.values(produtos[0]));