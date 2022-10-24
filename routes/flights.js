var express = require('express');
var router = express.Router();
// import our flights controller
var flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

// GET /flights/show
router.get('/:id', flightsCtrl.show)
module.exports = router;
