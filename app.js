"use strict";

const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

/* DB 연결 확인*/
const conn = mysql.createConnection({
  host: "3.35.169.150",
  user: "local",
  password: "1234",
  // database: "my_board",
});
conn.connect(function (err) {
  if (err) throw err;
  console.log("mySql Connected");

  // 접속후 db 생성 초기 생성 후 삭제 or 주석
  // connection.query('sql문', function (err, result) { err 예외, 콘솔 등 })

  // conn.query('CREATE DATABASE [이름]', function (err, result) {
  //     if (err) throw err;
  //     console.log('Database Created');
  // });
});

/* server 연결 확인 */
app.listen(port, () => console.log(`app listening on ${port}`));

/* url logger */
const myLogger = function (req, res, next) {
  console.log(
    new Date().toLocaleTimeString(),
    "| Request URL:",
    req.originalUrl
  );
  next();
};
app.use(myLogger);
app.use(express.json()); //Express 4.16 버전 이상 내장됨
app.use(express.urlencoded({ extended: false })); // url 형식의 data 전달

/* static 파일 자동 반환 */
app.use(express.static("./static"));

/* enable middleware */
//app.use("/api", express.urlencoded({ extended: false }), router);
const userRouter = require("./routes/user");
app.use("/api", [userRouter]);

// router.use('/api', [...routers])  --> 문법 차이가 뭔지 알아보기

app.get("/api/hello", function (req, res) {
  res.send("axios testing data");
});
