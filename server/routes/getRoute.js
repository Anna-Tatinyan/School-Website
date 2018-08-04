var express = require('express');

var router = express.Router();
module.exports = router.get('/', function(req, res) {
      res.json({ message: 'welcome to our upload module apis' });
  });
