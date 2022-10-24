var express = require('express');
var router = express.Router();
// import our flights controller
var flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/new', flightsCtrl.new);
module.exports = router;
