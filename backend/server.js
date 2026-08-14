const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// load quotes from file into memory
const quotesPath = path.join(__dirname, "quotes.json");
const quotes = JSON.parse(fs.readFileSync(quotesPath, "utf8"));

// serve the frontend files, which live in a sibling folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// api route that returns one random quote
app.get("/api/quote", function (req, res) {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  res.json(quote);
});

// api route that returns all quotes
app.get("/api/quotes", function (req, res) {
  res.json(quotes);
});

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
