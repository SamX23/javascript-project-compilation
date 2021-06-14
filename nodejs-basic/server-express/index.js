const express = require("express");
const app = express();

const PORT = 3000;
const DATA = {
  name: "sami",
  age: 25,
};

// Endpoint handler
app.get("/", (req, res) => res.send("Bismillah"));

app.get("/profile", (req, res) => res.json(JSON.stringify(DATA)));

// Turn on server at attached port
app.listen(PORT, () =>
  console.log(`This app listening on http://localhost:${PORT}`)
);
