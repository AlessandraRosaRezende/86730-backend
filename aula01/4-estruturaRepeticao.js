const array = [1, 2, 3, 4, 5];
// 
//             0  1  2  3  4

// console.log(array.length) // 5

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(index, ':', element);
// }


const educadores = [
  {
    nome: "Alê",   // index 0 da lista
    idade: 35,
    professor: true,
    tutor: false,
  },
  {
    nome: "Guilherme", // index 1 da lista
    idade: 34,
    professor: false,
    tutor: true,
  },
  {
    nome: "Léo",  // index 2 da lista
    idade: 16,
    professor: false,
    tutor: '5',
  },
];

for (let index = 0; index < educadores.length; index++) {
  const educador = educadores[index];
  console.log('Esse é o educador ',index, educador);
  if (educador.professor === true) {
    console.log(`está é a idade ${educador.idade} do ${educador.nome} `)
    console.log(`${educador.nome} é professor!`);
  } else if (educador.tutor === true) {
    console.log(`está é a idade ${educador.idade} do  ${educador.nome} `)
    console.log(`${educador.nome} é tutor!`);
  } else {
    console.log("teste educador.nome")
    console.log(`está é a idade ${educador.idade} do  ${educador.nome} `)
    console.log(`${educador.nome} Não é tutor nem professor!`);
  }
}


/*
Esse é o educador  0 { nome: 'Alê', idade: 35, professor: true, tutor: false }
está é a idade 35 do Alê 
Alê é professor!
Esse é o educador  1 { nome: 'Guilherme', idade: 34, professor: false, tutor: true }
está é a idade 34 do Guilherme 
Guilherme é tutor!
Esse é o educador  2 { nome: 'Léo', idade: 16, professor: false, tutor: '5' }
teste educador.nome
está é a idade 16 do Léo 
Léo Não é tutor nem professor!
*/