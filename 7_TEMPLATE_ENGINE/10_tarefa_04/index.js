const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// config partials
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

// config handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// css
app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "Smartphone One X5",
    price: "2.800,00",
    image: "/img/phone1.png",
    desc: "Potência, velocidade e câmera de última geração para seu dia render muito mais."
  },
  {
    id: 2,
    name: "EdgeBook Pro 15",
    price: "5.769,00",
    image: "/img/notebook.png",
    desc: "Design leve, bateria de longa duração e performance para todas as suas tarefas."
  },
  {
    id: 3,
    name: "Vision Tab S10",
    price: "1.499,00",
    image: "/img/tablet.png",
    desc: "Tela ampla e desempenho fluido para trabalho, estudos e entretenimento onde quiser."
  },
  {
    id: 4,
    name: "Headphone Echo H1",
    price: "699,00",
    image: "/img/headphone.png",
    desc: "Áudio imersivo, cancelamento de ruído e conforto para ouvir suas músicas favoritas."
  },
];

// rota produtos
app.get("/produto/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id == productId);

  if (product) {
    res.render("product-page", { product });
  } else {
    res.send("Produto não encontrado");
  }
});

// rota home
app.get("/", (req, res) => {
  res.render("home", { products });
});

app.listen(3000, () => {
  console.log("Servidor rodando...");
});
