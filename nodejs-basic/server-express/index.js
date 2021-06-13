const express = require("express");
const app = express();

const PORT = 3000;

// Endpoint handler
app.get("/", (req, res) => res.send("Bismillah"));

// Turn on server at attached port
app.listen(PORT, () =>
  console.log(`This app listening on http://localhost:${PORT}`)
);
