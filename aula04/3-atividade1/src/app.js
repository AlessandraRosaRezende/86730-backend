import express from "express";

const app = express();

app.use(express.json()); // middleware para receber body

const fakeUser = 
  {
    id: 1,
    nome: "John",
    sobrenome: "Doe",
    genero: "masculino",
    idade: 25,
    email: "john.doe@example.com",
  };

app.get("/bemvindo", (req, res) => {
  const htmlResponse =
    `<html> <head> <meta charset="UTF-8"> <title>Página de Boas-Vindas</title> <style> body { font-family: Arial, sans-serif; background-color:rgb(244, 244, 244); text-align: center; padding: 20px; } h1 { color: red; } .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); display: inline-block; } </style> </head> <body> <div class="container"> <h1>Bem-vindo ao Express!</h1> <p>Olá, esta é uma resposta HTML formatada.</p> <h3>Servidor Express com HTML</h3> </div> </body> </html>`;
  res.send(htmlResponse);
});
 
app.get("/usuario", (req, res) => {
  req.body = 'olá';
  console.log(req);
  console.log(req.body);
  return res.status(200).json(fakeUser); //statusHTTP
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});

// 200 -> ok
// 201 -> created
// 404 -> not found