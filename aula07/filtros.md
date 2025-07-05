# FILTROS
MongoDB usa objetos JSON para representar consultas(queries).Você passa esses objetos para métodos como .find(), .update(), .deleteMany(), entre outros, para filtrar documentos conforme a necessidade.

## Igualdade simples
Busca documentos onde um campo tem um valor exato.
Exemplo: encontrar clientes cujo nome seja "João":
```js
db.clientes.find({ nome: "João" })
```

## Operadores de comparação
Permitem buscar documentos que satisfaçam condições como maior, menor, diferente etc.
$gt significa "maior que". Exemplo: buscar clientes com idade maior que 25 anos:
```js
db.clientes.find({ idade: { $gt: 25 } })
```

- $gte significa "maior ou igual a".
- $lt significa "menor que".
- $lte significa "menor ou igual a".
- $ne significa "diferente de".

Exemplo para achar clientes com idade diferente de 25:
```js
db.clientes.find({ idade: { $ne: 25 } })
```

## Filtros por conjunto de valores: $in e $nin
$in busca documentos onde o valor de um campo está dentro de uma lista. Exemplo: buscar clientes cujo nome seja "Juan" ou "Lucia":
```js
db.clientes.find({ nome: { $in: ["Juan", "Lucia"] } })
```

$nin busca documentos onde o valor não está na lista. Exemplo: buscar clientes cujo nome não seja "Juan" nem "Lucia":
```js
db.clientes.find({ nome: { $nin: ["Juan", "Lucia"] } })
```

## Filtros lógicos: $and, $or, $not
$and retorna documentos que satisfazem todas as condições passadas. Exemplo: clientes chamados João e com idade 29:
```js
db.clientes.find({ $and: [{ nome: "João" }, { idade: 29 }] })
```

$or retorna documentos que satisfaçam pelo menos uma das condições. Exemplo: clientes chamados João ou com idade maior que 30:
```js
db.clientes.find({ $or: [{ nome: "João" }, { idade: { $gt: 30 } }] })
```

$not nega a condição seguinte. Exemplo: clientes que não têm idade igual a 25:
```js
db.clientes.find({ idade: { $not: { $eq: 25 } } })
``

## Filtro por existência de campo: $exists
Você pode filtrar documentos que possuem ou não um campo. Para documentos que têm o campo "idade":
```js
db.clientes.find({ idade: { $exists: true } })
```

Para documentos que não têm o campo "idade":
```js
db.clientes.find({ idade: { $exists: false } })
```

## Filtro por expressão regular(regex)
Permite buscar valores de texto que combinam com um padrão. Exemplo: clientes cujo nome começa com "J":
```js
db.clientes.find({ nome: { $regex: /^J/ } })
```

Exemplo: clientes cujo nome contém "an":
```js
db.clientes.find({ nome: { $regex: /an/ } })
```

## Filtro por campo nulo
Busca documentos onde o campo é null ou não existe.
```js
  db.clientes.find({ idade: null })
```

## Uso combinado com projeção, skip, sort e limit
- Projeção: define quais campos mostrar no resultado(ex.: mostrar apenas nome e idade).
- Skip: pula os primeiros N documentos.
- Sort: ordena os documentos(ascendente ou descendente).
- Limit: limita a quantidade de documentos retornados.

Exemplo que busca clientes maiores de 18 anos, mostrando só nome e idade, ordenando por idade crescente, pulando os 2 primeiros e retornando 3 documentos:
```js
db.clientes.find(
  { idade: { $gte: 18 } },            // filtro
  { nome: 1, idade: 1, _id: 0 }      // projeção (mostrar só nome e idade, ocultar _id)
).sort({ idade: 1 })                  // ordenar por idade ascendente
  .skip(2)                           // pular os 2 primeiros resultados
  .limit(3)                          // trazer só 3 resultados depois do skip
```