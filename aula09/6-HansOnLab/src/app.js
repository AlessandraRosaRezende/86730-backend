require('dotenv').config();
const express = require("express");
const healthRouter = require("./routes/health.route");
const userRouter = require("./routes/user.route");
const handlebars = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);

const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.get('/', (req, res) => {
  res.redirect('/students')
});
app.use("/health", healthRouter);
app.use("/students", userRouter);

mongoose.connect(process.env.MONGO_URI)
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.listen(8080, () => {
  console.log("Online na porta 8080");
})

module.exports = app;
