const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Conteúdo super completo de Node.js",
    comments: 4,
  };

  res.render("blogpost", { post });
});

// Renderizando a view HOME
app.get("/", (req, res) => {
  const user = {
    name: "Letícia",
    surname: "Pignatari",
  };

  const auth = true;

  const approved = true;

  res.render("home", { user: user, auth, approved });
});

app.listen(3000);
