const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard")
})

// Renderizando a view HOME
app.get("/", (req, res) => {
  const user = {
    name: "Letícia",
    surname: "Pignatari",
  };

  const auth = false

  res.render("home", { user: user, auth });
});

app.listen(3000);
