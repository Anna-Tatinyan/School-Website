var express = require('express');
const server = require("../server")
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/courses', function (req, res) {
  res.send('list of courses');
})

router.get('/students', function (req, res) {
  res.send('list of students');
})

router.get('/teachers', function (req, res) {
  res.send('list of classes');
})
module.exports = router;
