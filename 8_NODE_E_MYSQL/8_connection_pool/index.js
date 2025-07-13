const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// rota principal
app.get("/", (req, res) => {
  res.render("home");
});

// rota de inserção dos livros
app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES (?,?)`;
  const values = [title, pageqty];

  pool.query(sql, values, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

// resgatando dados
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    console.log(books);

    res.render("books", { books });
  });
});

// resgatando dados específicos
app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  // Pega todas as informações de books onde o id for o id da URL
  const sql = `SELECT * FROM books WHERE id = ?`;

  pool.query(sql, [id], function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];
    res.render("book", { book });
  });
});

// resgatando um dado e mandando para uma view de edição
app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ?`;

  pool.query(sql, [id], function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];
    res.render("editbook", { book });
  });
});

// atualizando os registros
app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  // atualize o título e as qnt de páginas onde o id for o mesmo
  const sql = `UPDATE books SET title = ?, pageqty = ? WHERE id = ?`;
  const values = [title, pageqty, id];

  pool.query(sql, values, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE id = ?`;

  pool.query(sql, [id], function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.listen(3000);
