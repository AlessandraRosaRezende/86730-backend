use('baseCRUD');
db.createCollection('clientes');

//1. Inserir os 5 documentos na coleção clientes
// db.clientes.insertMany([
//   { nome: "Paulo", idade: 25 },
//   { nome: "João", idade: 22 },
//   { nome: "Lúcia", idade: 25 },
//   { nome: "João", idade: 29 },
//   { nome: "Fede", idade: 35 }
// ])

//2. Listar todos os documentos, ordenados por idade decrescente
db.clientes.find().sort({ idade: -1 })

//Listar todos os documentos, ordenados por idade crescente
db.clientes.find().sort({ idade: 1 })

//3. Listar o cliente mais jovem
db.clientes.find().sort({idade: 1}).limit(1)

//4. Listar o segundo cliente mais jovem
db.clientes.find().sort({ idade: 1 }).skip(1).limit(1)

//Listar o segundo cliente mais jovem por ordem alfabética
db.clientes.find().sort({ idade: 1, nome: 1 }).skip(1).limit(1)

//5. Listar clientes chamados "John"
db.clientes.find({ nome: "John" })

//6. Listar clientes chamados "João" que têm 29 anos
db.clientes.find({ nome: "João", idade: 29 })

//7. Listar clientes chamados "Juan" ou "Lucia"
db.clientes.find({ nome: { $in: ['Juan', 'Lucia']}})

//7. Listar clientes chamados "Juan" ou "Lucia" ou "Paulo"
db.clientes.find({ nome: { $in: ['Juan', 'Lucia', 'Paulo'] } })

//8. Listar clientes com mais de 25 anos
db.clientes.find({ idade: { $gt: 25}})

//Listar clientes com 25 anos ou mais
db.clientes.find({ idade: { $gte: 25 } }) //gratter then or equal

//9. Listar clientes com 25 anos ou menos
db.clientes.find({ idade: { $lte: 25 } }) //less then or equal

//10. Listar clientes que NÃO têm 25 anos
db.clientes.find({ idade: { $ne: 25 } }) //not equal

//11. Listar clientes com idade entre 26 e 35 anos(inclusive)
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

//12. Atualizar a idade de Fede para 36 anos
db.clientes.updateOne(
  { nome: "Fede" },
  { $set: { idade: 36 } }
)
// Depois, listar clientes entre 26 e 35 para ver se o Fede desapareceu da lista:
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

//13. Atualizar todas as idades de 25 para 26 anos
db.clientes.updateMany(
  { idade: 25 },
  { $set: { idade: 26 } }
)
//Depois, listar clientes entre 26 e 35 para ver se apareceram os atualizados:
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

//14. Apagar clientes que se chamam "João"
db.clientes.deleteMany({ nome: "João" })
// Verificar o resultado:
db.clientes.find()

//15. Apagar todos os documentos da coleção clientes
db.clientes.deleteMany({})
// Verificar o resultado:
db.clientes.find()