const express = require("express");
const morgan = require('morgan');
const authRouter = require('./api/auth');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json(process.memoryUsage());
});

app.use('/api/auth', authRouter);

module.exports = app;
