const { render } = require('ejs');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

function show(req, res) {
   // id will be in the request params
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {
                title: `${flight.airline} Airlines Flight ${flight.flightNO}`,
                flight,
                tickets,
            });
        });
    }); 
}

function index(req, res) {
    // async operation so we need to use a cb function 
    // using an empty curly brace will return all documents
    Flight.find({}, function (err, flights) {
        // now we can pass in flights
        res.render('flights', {title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    // render the new view for the flights db
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    // make sure there are no empty strings where the value should be
    for (let key in req.body) {
        // if there is an empty value delete it
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // if an error occurs, redirect back to /flights/new
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        // if successful then we redirect since we performed CRUD
        // remeber to change after index page is added
        res.redirect('/flights')
    });
}