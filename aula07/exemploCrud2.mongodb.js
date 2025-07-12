use('escola');
db.createCollection('alunos');
// db.alunos.insertMany([
//   {
//     nome: "Ana",
//     sobrenome: "Silva",
//     curso: "Matemática",
//     idade: 20,
//     correspondencia: "ana@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Bruno",
//     sobrenome: "Oliveira",
//     curso: "Física",
//     idade: 22,
//     correspondencia: "bruno@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Carla",
//     sobrenome: "Souza",
//     curso: "Química",
//     idade: 21,
//     correspondencia: "carla@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Diego",
//     sobrenome: "Costa",
//     curso: "Biologia",
//     idade: 23,
//     correspondencia: "diego@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Elisa",
//     sobrenome: "Pereira",
//     curso: "História",
//     idade: 20,
//     correspondencia: "elisa@email.com",
//     sexo: "F"
//   }
// ])

db.alunos.find()

// db.alunos.insertOne({
//   nome: "Felipe",
//   sobrenome: "Almeida",
//   curso: "Geografia"
// })

db.alunos.find()

// db.alunos.insertOne({
//   nome: "Leonardo"
// })

// db.alunos.insertMany([
//   {
//     nome: "Gabriel",
//     sobrenome: "Mendes",
//     curso: "Engenharia",
//     idade: 24,
//     correspondencia: "gabriel@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Helena",
//     sobrenome: "Fernandes",
//     curso: "Administração",
//     idade: 22,
//     correspondencia: "helena@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Igor",
//     sobrenome: "Lima",
//     curso: "Direito",
//     idade: 25,
//     correspondencia: "igor@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Juliana",
//     sobrenome: "Barros",
//     curso: "Arquitetura",
//     idade: 23,
//     correspondencia: "juliana@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Karla",
//     sobrenome: "Ribeiro",
//     curso: "Psicologia",
//     idade: 21,
//     correspondencia: "karla@email.com",
//     sexo: "F"
//   }
// ])

db.alunos.find()

//Buscar todos os alunos (nome e idade) ordenando por idade crescente
// 1 -> true / ligado
// 0 -> false / desligado
// 1 {} -> filtro
// 2 {} -> projeção (o que vou mostrar)
db.alunos.find({}, {nome: 1, idade: 1}).sort({ idade: 1, nome: 1 })

// sem _id
db.alunos.find({}, { nome: 1, idade: 1, _id: 0 }).sort({ idade: 1, nome: 1 })

// Buscar os alunos projetando apenas nome e curso, pulando os 3 primeiros e limitando a 4 documentos:
db.alunos.find({}, { nome: 1, curso: 1, _id: 0 }).skip(3).limit(4)

// paginação -> em 3 páginas
db.alunos.find({}, { nome: 1, curso: 1, _id: 0}).limit(4) //pag 1

db.alunos.find({}, { nome: 1, curso: 1, _id: 0 }).skip(4).limit(4) //pag 2

db.alunos.find({}, { nome: 1, curso: 1, _id: 0 }).skip(8).limit(4) //pag 3

// Buscar todos os alunos do sexo feminino, projetando apenas nome e sobrenome
db.alunos.find(
  { sexo: "F" },
  { nome: 1, sobrenome: 1, _id: 0 }
)

// Buscar alunos com idade maior ou igual a 23, ordenando pela idade decrescente
db.alunos.find(
  { idade: { $gte: 23 } },
  { nome: 1, idade: 1 }
).sort({ idade: -1 })

// Buscar alunos que fazem o curso "Engenharia" ou "Direito", mostrar nome, curso e pular os 2 primeiros
db.alunos.find(
  { curso: { $in: ["Engenharia", "Direito"] } },
  { nome: 1, curso: 1, _id: 0 }
).skip(2)

// Buscar os 3 primeiros alunos mais novos, projetando todos os campos exceto o email
db.alunos.find(
  {},
  { correspondencia: 0 }
).sort({ idade: 1 }).limit(3)

// Buscar alunos cujo nome começa com a letra “J”, mostrando nome e idade
db.alunos.find(
  { nome: { $regex: /^J/, $options: "i" } },
  { nome: 1, idade: 1, _id: 0 }
)

// Buscar alunos com idade entre 20 e 24 anos, ordenando por sobrenome crescente e limitando a 5
db.alunos.find(
  { idade: { $gte: 20, $lte: 24 } }
).sort({ sobrenome: 1 }).limit(5)

// Contar quantos alunos existem com o campo curso preenchido
db.alunos.countDocuments({ curso: { $exists: true } })

// Buscar todos os documentos, ordenando por um campo que alguns documentos não têm(ex: idade), para ver o comportamento
db.alunos.find().sort({ idade: 1 })

/*
Como se comportam documentos com campos incompletos ?
Campos faltantes não aparecem na projeção. Se ordenar por campo ausente(idade no aluno “Leonardo”), ele aparecerá no começo ou fim da lista dependendo da ordenação, pois o Mongo trata ausência como null.
Projeções mostram só os campos existentes em cada documento. 
Skip e limit atuam na ordem dos documentos filtrados e projetados.
*/

// CRUD -> Create (insertOne e insertMany), Read (find, findOne), Update, Delete

//Atualizar a idade de um aluno específico(ex: nome "Ana" e sobrenome "Silva")
db.alunos.updateOne(
  {nome: "Ana", sobrenome: "Silva"},
  {$set: {idade: 25}}
)

db.alunos.findOne({ nome: "Ana", sobrenome: "Silva" })

//Se o registro não existir, o upsert o cria
db.alunos.updateOne(
  { nome: "Alessandra", sobrenome: "Rezende" },
  { $set: { idade: 37 } },
  { upsert: true }
)

db.alunos.findOne({ nome: "Alessandra" })

//Atualizar o curso de todos os alunos com idade maior que 30 para "Aposentadoria"
db.alunos.updateMany(
  {idade: {$gt: 22 }}, //maior que
  {$set: {curso: "Aposentadoria"}}
)

db.alunos.find({ idade: {$lt: 22} }) //menor que 

// Adicionar um novo campo email a um aluno que ainda não tem
db.alunos.updateOne(
  { nome: "Lucas" },
  { $set: { email: "lucas@email.com" } }
)
// Remover o campo correspondencia de um aluno específico
db.alunos.updateOne(
  { nome: "Carla" },
  { $unset: { correspondencia: "" } }
)

//Deletar um aluno específico pelo nome e sobrenome
db.alunos.deleteOne({nome: 'Gabriel', sobrenome:'Mendes'})
db.alunos.find({nome: 'Gabriel'})

//Deletar todos os alunos que não possuem o campo idade definido
db.alunos.deleteMany(
  { idade: { $exists: false }}
)
db.alunos.find()

// Deletar todos os alunos com idade menor que 18 anos
db.alunos.deleteMany(
  { idade: { $lt: 18 } }
)
db.alunos.find()