# 📄 Comparativo: mongoose-paginate-v2 vs skip + limit

## 1. Abordagem manual com skip + limit

```js
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;

const items = await Model.find(filter)
  .sort(sortCondition)
  .skip(skip)
  .limit(limit);
const total = await Model.countDocuments(filter);
```

### ✅ Vantagens
- 🎯 Simples de implementar; sem dependências externas.
- Permite acesso direto a qualquer página (ex.: página 10).

### ❌ Desvantagens
- 📉 Desempenho degrada à medida que `skip` aumenta, pois o Mongo precisa percorrer internamente os documentos ignorados.
- Requer chamada adicional ao `countDocuments()` para obter o total de itens.

---

## 2. Usando o plugin mongoose-paginate-v2

```js
const options = {
  page: req.query.page || 1,
  limit: req.query.limit || 10,
  lean: true,
  sort: sortCondition
};
const result = await Model.paginate(filter, options);
```

### ✅ Vantagens
- API moderna e unificada.
- Inclui metadados úteis: total de documentos, total de páginas, página atual, etc.
- Suporte nativo a `lean`.

### ⚠️ Desvantagens
- Executa duas queries (`find` + `count`).
- Ainda depende de `skip`; mantém a limitação fundamental.

---

## 3. Cursor-based pagination

```js
const lastId = req.query.lastId;
const query = lastId
  ? { ...filter, _id: { $gt: lastId } }
  : filter;

const items = await Model.find(query)
  .sort({ _id: 1 })
  .limit(limit);
```

### ✅ Vantagens
- Performance consistente, mesmo em grandes volumes.
- Ideal para infinite scroll.

### ⚠️ Desvantagens
- ❌ Não permite saltos arbitrários.
- ❌ Não fornece metadados como total e páginas.

---

## 4. Comparativo rápido

| Estratégia               | Simples | Total/Páginas | Performance | Pula páginas |
|--------------------------|:-------:|:-------------:|:-----------:|:------------:|
| skip + limit             | ✅      | ✅            | ⚠️ degrada   | ✅           |
| mongoose-paginate-v2     | ✅      | ✅            | ⚠️ mesma     | ✅           |
| Cursor-based pagination  | ⚠️      | ❌            | ✅ escala bem| ❌           |

---

## 5. Qual escolher?

- **Páginas tradicionais** → mongoose-paginate-v2 ou skip + limit.
- **Grandes volumes / infinite scroll** → cursor-based.
- **Híbrido** → cursor para próximos, skip para saltos.

