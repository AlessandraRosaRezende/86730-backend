// FIND THE BUG

// 1. Inserção de vários pets
// Código original:
db.pets.insertOne([{ name: "Dolly", specie: "peixe" }, { name: "Doby", { specie: "cachorro" }])

/*
Erros:
insertOne insere só um documento. Para vários documentos, use insertMany.
A estrutura do segundo objeto está errada: { name: "Doby", { specie: "cachorro" } } tem uma vírgula extra, está mal formatado.
Correção:
*/
db.pets.insertMany([
  { name: "Dolly", specie: "peixe" },
  { name: "Doby", specie: "cachorro" }
])

// 2. Obter os últimos 5 pets que são peixes
// Código original:
db.pets.find({
  specie: "fish }).limit(5)

/*
Erros:
Aspas incorretas e não fechadas para "fish".
"Últimos 5" não é garantido apenas com.limit(5) — para garantir os "últimos", precisa ordenar por algum campo de data ou _id decrescente.
Correção:
*/
db.pets.find({ specie: "fish" }).sort({ _id: -1 }).limit(5)

// 3. Obter apenas o nome dos últimos 5 pets com idade inferior a 10 anos
// Código original:
db.pets.find(age: { $gte: { 10} }}, { name: 1 }).sort(age: 1).limit(5)

/*
Erros:
A consulta está mal formatada, faltando chaves e vírgulas.
{ age: { $gte: { 10 } } } está errado — $gte espera um valor, não um objeto.
Você quer pets com idade inferior a 10, então precisa usar $lt: 10.
A projeção { name: 1 } está correta, mas o _id será mostrado por padrão(se quiser esconder, use { name: 1, _id: 0 }).
.sort(age: 1) está mal formatado, precisa ser.sort({ age: 1 }).
Correção:
*/
db.pets.find(
  { age: { $lt: 10 } },    // idade inferior a 10
  { name: 1, _id: 0 }     // mostrar só o nome, ocultar _id
).sort({ _id: -1 })        // ordenar por _id decrescente (últimos inseridos)
  .limit(5)

// Se quiser ordenar pelo campo age(do menor para o maior), a consulta seria:
db.pets.find(
  { age: { $lt: 10 } },
  { name: 1, _id: 0 }
).sort({ age: 1 })
  .limit(5)

// Mas isso não garante que sejam os últimos 5 pets inseridos — só que os 5 mais jovens.