const { render } = require('ejs');
const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
};

function newFlight(req, res) {
    // render the new view for the flights db
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // if an error occurs, redirect back to /flights/new
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        // if successful then we redirect since we performed CRUD
        // remeber to change after index page is added
        res.redirect('/flights/new')
    });
}