const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

router.get('/', async function(req, res, next) {
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host:process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    });
    // query database
    const [results] = await connection.query('SELECT NOW()');

    res.render('mysql', { title: 'MySQL', sql: results[0]['NOW()'] });
  } catch(e) {
    res.render('mysql', { title: 'MySQL', sql: e });
  }
});

module.exports = router;
