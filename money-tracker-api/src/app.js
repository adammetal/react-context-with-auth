const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.json(process.memoryUsage());
});

module.exports = app;
