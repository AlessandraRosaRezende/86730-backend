const express = require("express");

const app = express();

app.use(express.json());

app.get("/saudar", (req, res) => {
  res.send("Olá a todos!");
});

app.post("/saudarDinamico/:name", (req, res) => { //req.params
  console.log(req); 
  const { name } = req.params;
  res.send(`Olá ${name}, Tudo bom?`);
});

app.listen(8080, () => {
  console.log("Online na porta 8080");
});

// com : -> req.params
// sem : -> req.query