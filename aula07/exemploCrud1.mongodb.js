use('baseCRUD');
db.createCollection('pets');
// db.pets.insertMany([
//   { nome: "Luna", especie: "cachorro", idade: 4 },
//   { nome: "Mimi", especie: "gato", idade: 2 },
//   { nome: "Nina", especie: "cachorro", idade: 7 }
// ])
db.pets.find({especie: 'cachorro'})
db.pets.countDocuments()
db.pets.estimatedDocumentCount()  //não aceita filtro

db.pets.countDocuments({especie: 'gato'})
// db.pets.estimatedDocumentCount({ especie: 'gato' }) // não funciona

/*
countDocuments()
db.pets.countDocuments({ especie: "cachorro" })
Conta exatamente quantos documentos têm especie: "cachorro".
Conta exatamente o número de documentos que correspondem a um filtro(ou todos se não passar filtro).
Realiza uma consulta com filtro(ou vazio) e conta de forma precisa.
Pode ser mais lento em coleções muito grandes, pois faz uma varredura real nos documentos que correspondem ao critério.

estimatedDocumentCount()
db.pets.estimatedDocumentCount()
Retorna uma estimativa rápida do número total de documentos na coleção, sem usar filtros.
Usa as estatísticas internas do MongoDB, por isso é mais rápido, mas pode não ser 100 % preciso se houver muitas operações de escrita acontecendo.
Só serve para contar o total de documentos na coleção, não aceita filtros.

Quando usar qual ?

countDocuments()
Use quando precisar contar documentos que satisfaçam um filtro específico ou até mesmo sem filtro, mas com contagem precisa.
Retorna um resultado exato.
Pode ser mais lento em coleções grandes, pois faz uma varredura real nos documentos.

estimatedDocumentCount()
Use quando precisar saber rapidamente uma estimativa do total de documentos na coleção, sem aplicar filtros.
Retorna um valor aproximado, não necessariamente 100 % preciso.
É mais rápido, pois usa estatísticas internas do MongoDB.
*/