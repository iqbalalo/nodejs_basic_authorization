const express = require("express");
const jwt = require("jsonwebtoken");
const authorize = require("./authorization");
const config = require("./config");

const app = express();
const port = process.env.PORT || 3000;

app.get("/token", (req, res) => {
  const payload = {
    id: "0000",
    scopes: ["create", "update"]
  };

  const token = jwt.sign(payload, config.SECRET);
  res.json({ message: token });
});

app.get("/", authorize("create"), (req, res) => {
  res.json({ message: "Hello world" });
});

const server = app.listen(port, () => {
  console.log("Server is listening on ", server.address().port);
});