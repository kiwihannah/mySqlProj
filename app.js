"use strict";

const express = require("express");
const app = express();
const port = 3000;
const conn = require("./config/db");

conn.connect(function (err) {
  if (err) throw err;
  console.log("mySql Connected");
});

app.listen(port, () => console.log(`app listening on ${port}`));
  const myLogger = function (req, res, next) {
  console.log(
    new Date().toLocaleTimeString(),
    "| Request URL:",
    req.originalUrl
  );
  next();
};

app.use(express.static("./static"));

app.use(myLogger);
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

const usersRouter = require("./routes/user"); //callback obj
app.use('/api', usersRouter);