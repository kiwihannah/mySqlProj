const express = require('express');
const router = express.Router();
const conn = require('../config/db'); //seq
const User = require('../models/user');
 
router.get('/users', function(req, res, next) {
  conn.connect(function(err) {
    if (err) throw err;
    conn.query('SELECT * FROM users ORDER BY id desc',function(err,rows) {
      err ? res.status(400).send({}) : res.status(200).send({ users : rows });
    });
  });
});

router.post('/sign-up', function(req, res, next) {
  conn.connect(function(err) {
    if (err) throw err;
    const { name, email, password, phone, birthday } = req.body;
    let sql =`INSERT INTO users (name, email, password, phone, birthday) 
              VALUES ('${name}', '${email}', '${password}', '${phone}', '${birthday}')`;
    conn.query(sql, function (err, result) {
      if (err) throw err;
      err ? res.status(400).send({}) : res.status(200).send({});
    });
  });
});

router.get('/users/:id', function(req, res, next) {
    let { id } = req.params;
    conn.query('SELECT * FROM users WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err
        rows.length >= 0 ? res.status(200).send({}) : res.status(400).send({ users : rows });
    });
});

router.post('/users/:id', function(req, res, next) {
    // let { name, email, password, phone, birthday } = req.body;
    conn.query('UPDATE users SET ? WHERE id = ' + id, req.body, function(err, result) {
        err ? res.status(400).send({}) : res.status(200).send({});
    });
});
   
router.delete('/users/:id', function(req, res, next) {
    let { id } = req.params;
    conn.query('DELETE FROM books WHERE id = ' + id, function(err, result) {
      err ? res.status(400).send({}) : res.status(200).send({});
    });
});

module.exports = router;