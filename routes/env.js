var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('env', { title: 'Env List', env: process.env });
});

module.exports = router;
