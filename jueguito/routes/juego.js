var express = require('express');
var router = express.Router();

//console.log('Juego');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('juego', { title: 'Jueguito' });
});

module.exports = router;