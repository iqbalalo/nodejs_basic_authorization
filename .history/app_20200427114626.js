const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.get("/token", (req, res) => {
  const payload = {
    id: "0000"
  };

  const token = jwt.sign(payload, "secret");
  res.json({ message: token });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const server = app.listen(port, () => {
  console.log("Server is listening on ", server.address().port);
});
