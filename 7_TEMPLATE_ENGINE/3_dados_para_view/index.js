const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Renderizando a view
app.get("/", (req, res) => {

  const user = {
    name: "Letícia",
    surname: "Pignatari"
  }

  res.render("home", {user: user});
});

app.listen(3000)
