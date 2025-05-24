const nome = "Alê"; //constante
// console.log(nome)
// nome = "Jhony";

let idade = 35
// console.log(idade)
idade = 36
// console.log(idade)

const educador = {
  nome: "Alê",
  idade: 34,
  professor: true,
  tutor: false,
};

console.log(educador.nome);

educador.nome = "Alessandra Rosa Rezende";
console.log(educador.nome);

// const a = {
//   letra: "A",
// }

// const b = {
//   letra: "A",
// }
// console.log(a == b);

// const c = 5
// const d = 5
// console.log(c == d); // true


// isso nao pode 
// educador = true

//console.log(educador.nome);

const educadores = [
  {
    nome: "Alê",
    idade: 34, // 0
    professor: true,
    tutor: false,
  },
  {
    nome: "Jhony", //1
    idade: 22,
    professor: false,
    tutor: true,
  },
];

// console.log(educadores);
// educadores = {}

const newProf = {
  nome: "Alê Rosa",
  idade: 35,
  professor: true,
  tutor: false,
};

educadores[0] = newProf;

console.log(educadores);

educadores[0] = 1;

educadores[1].nome = "jhony";

// console.log(educadores);

// educador = newProf

//educadores = []
