class Pessoa {
  constructor(nome, idade) { // atributos
    // this é uma referência ao objeto que está sendo criado
    this.nome = nome;
    this.idade = idade
  }

  static especie = "humano";

  saudar = () => { // métodos
    console.log(`Olá, meu nome é ${this.nome}, prazer em te conhecer!`);
  };

  getEspecie() {
    console.log(`Eu sou um ${Pessoa.especie}`);
  }
}

let pessoa1 = new Pessoa("Alessandra", 35);
let pessoa2 = new Pessoa("Guilherme", 22);

console.log(pessoa1.nome);
console.log(pessoa2.nome);

pessoa1.saudar();
pessoa2.saudar();
pessoa1.getEspecie();
pessoa2.getEspecie();
