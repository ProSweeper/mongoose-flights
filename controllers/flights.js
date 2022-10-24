const { render } = require('ejs');
const Flight = require('../models/flight');

module.exports = {
    new: newFlight,

};

function newFlight(req, res) {
    // render the new view for the flights db
    res.render('flights/new', {title: 'Add Flight'});
}