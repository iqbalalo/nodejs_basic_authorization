const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(JSON.stringify({ message: "Hello world" }));
});

const server = app.listen(port, () => {
  console.log("Server is listening on ", server.address().port);
});
