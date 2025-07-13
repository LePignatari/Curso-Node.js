const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configurando o diretório dos partials
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
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

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "blabla",
      comments: 4,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "blabla",
      comments: 4,
    },
    {
      title: "Aprender Java",
      category: "Java",
      body: "blabla",
      comments: 4,
    },
  ];

  res.render("blog", { posts });
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
