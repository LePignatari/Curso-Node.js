const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();

// config handlebars
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// rota de inserção
app.get("/users/create", (req, res) => {
  res.render("adduser");
});

// inserindo os dados na tabela
app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter; // on / off

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  // espera a criação do usuário antes de redirecionar
  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

// resgatando dados
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

// removendo dados
app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

// rota principal - lendo dados
app.get("/", async (req, res) => {
  // resgatando todos os dados do user
  // o await faz com que o programa espere isso acontecer para que então redirecione para a home
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render("home", { users: users });
});

// criação da tabela / inicio do servidor
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
