require("dotenv").config();
const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_SESSION, // Change cette clé par une clé secrète propre à ton application
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

// on lance le serveur
app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
