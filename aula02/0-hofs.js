require('colorized-console');

const array = new Array();

const educadores = [
  {
    nome: "Alê",
    idade: 37,
    professor: true,
    tutor: false,
    liguagem: "JS",
  },
  {
    nome: "Ana",
    idade: 34,
    professor: true,
    tutor: false,
    liguagem: "JS",
  },
  {
    nome: "Jhony",
    idade: 22,
    professor: false,
    tutor: true,
    liguagem: "dotNet",
  },
  {
    nome: "Marta",
    idade: 34,
    professor: true,
    tutor: false,
    liguagem: "Go",
  },
  {
    nome: "Thiago",
    idade: 34,
    professor: false,
    tutor: true,
    liguagem: "JS",
  },
];

// um professor que saiba JS
// retorna o primeiro match
const professorFind = educadores.find(
  (educador) => {
    return educador.professor === true && educador.liguagem === "JS";
  }
);

// console.log(professorFind);

// retorna um array com todos que satisfazem o filtro
const professorFilter = educadores.filter((educador) => { // callback
  return educador.liguagem === "js" // precisa do return
}); // case sensitive

const professorFilter2 = educadores.filter(educador => educador.liguagem === "js"); // case sensitive

console.log(professorFilter);

// // indicação de estudo extra
// // map, foreach, some, every, filter, find, sort, push, pop, shift, **reduce**, splice, findIndex, includes, slice, concat, join
