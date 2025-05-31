require('colorized-console');
// nullish

//const taxaContrato = 0
// usado para sempre deixar um valor default
// 0 = false 1 = true
//const variavelPreenchida = taxaContrato || "Sem Valor";

//console.log(variavelPreenchida);
// aceita zero como valor
//const variavelNullish = taxaContrato ?? "Sem Valor 2";

//console.log(variavelNullish);

// class e private

class Persona {
  #fullname;
  #dataNascimento;
  idade;
  constructor(nome, sobrenome, dataNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#fullname = `${this.nome} ${this.sobrenome}`;
    this.#dataNascimento = dataNascimento;
    this.idade = this.#calculaIdade
  }

  getFullName = () => this.#fullname;
  #calculaIdade = () => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoNascimento = this.#dataNascimento.getFullYear();
    this.idade = anoAtual - anoNascimento;
    return this.idade;
  }
  getIdade = () => this.#calculaIdade();
}

const pessoa1 = new Persona("Alê", "Rosa", new Date("1986-01-01"));
console.log(pessoa1.nome);

console.log(pessoa1.getFullName());
console.log(pessoa1.getIdade());
console.log(pessoa1.idade); // não deveria acessar diretamente a idade, mas funciona
// console.log(pessoa1.#fullname); // não pode acessar o atributo privado
// console.log(pessoa1.#dataNacimento); // não pode acessar o atributo privado
// console.log(pessoa1.#calculaIdade()); // não pode acessar o método privado

/*
// object Entries, keys, values

const educador = {
// key  value
  nome: "Alê",
  idade: 37,
  professor: true,
  tutor: false,
};

// tranforma em Array
const chavesEValor = Object.entries(educador);
console.log(chavesEValor);
// pega só as chaves
const chaves = Object.keys(educador);
console.log(chaves);
// pega só os valoes
const valores = Object.values(educador);
console.log(valores);
*/

// rest e spread

const educador = {
  nome: "Alê",
  cpf: "999.999.999-99",
  idade: 37,
  professor: true,
  tutor: false,
  compartilharEMail: false,
  tamanho: 157,
};

const enderecoEducador = {
  cidade: "BH",
  pais: "Brasil",
};

console.log(educador.nome)

const key = 'nome'
console.log(educador[key])
const { nome, idade, tamanho } = educador;
//console.log(educador);
console.log(nome, idade, tamanho);

const newEducador = {
  nome: educador.nome,
  // cpf: educador.cpf,
  idade: educador.idade,
  professor: educador.professor,
  tutor: educador.tutor,
  compartilharEMail: educador.compartilharEMail,
  tamanho: educador.tamanho,
  cidade: enderecoEducador.cidade,
  pais: enderecoEducador.pais
}
//console.log(newEducador)
// spread
let educadorCompleto =  {...educador , ...enderecoEducador};
//console.log("AAAA",educadorCompleto);

// rest
const { cpf,  ...educardorSemCpf } = educadorCompleto;

///const cpf = educadorCompleto.cpf

 console.log("cpf", cpf);
 //552.***.***.***-50
 console.log("rest", educardorSemCpf);
 console.log("educador", educadorCompleto);

const mascararCPF = (cpf) => {
  return cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/, '***.***.***-**');
};

const educadorComCpfMascarado = {
  ...educadorCompleto,
  cpf: mascararCPF(educadorCompleto.cpf)
};

console.log(educadorComCpfMascarado);